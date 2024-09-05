# imaplib docs:
#   https://docs.python.org/3/library/imaplib.html#imaplib.IMAP4.search
#   https://www.rfc-editor.org/rfc/rfc3501#section-6.4.4 (con.search() parameters)

# Importing libraries
import imaplib
import email
import json
from email.header import decode_header
from bs4 import BeautifulSoup

# Load credentials from secure.json
with open('secure.json', 'r') as json_file:
    credentials = json.load(json_file)

user = credentials['email']['username']
password = credentials['email']['password']
imap_url = 'imap.gmail.com'

# Function to decode email subject
def decode_subject(encoded_subject):
    decoded_subject, encoding = decode_header(encoded_subject)[0]
    if encoding:
        return decoded_subject.decode(encoding)
    return decoded_subject

# Function to extract plain text content from email
def get_plain_text(email_message):
    plain_text = ""
    for part in email_message.walk():
        if part.get_content_type() == "text/plain":
            plain_text += part.get_payload(decode=True).decode("utf-8", errors="ignore")
    return plain_text

def get_body_html(email_message):
    body_html = ""
    for part in email_message.walk():
        if part.get_content_type() == "text/html":
            body_html += part.get_payload(decode=True).decode("utf-8", errors="ignore")
    return body_html


# get_body
def get_body(id):
    """Get the body of the email"""
    res, mail_data = con.fetch(id, '(RFC822)')
    raw_email = mail_data[0][1]
    email_message_instance = email.message_from_bytes(raw_email)
    whole_body = ''
    for part in email_message_instance.walk():
        print(part.get_content_type())
        if part.get_content_type() == "text/plain":  # ignore attachments/html
            body = part.get_payload(decode=True)
            print("body" + body.decode("utf-8", errors="ignore"))  # Decode and print the body
            whole_body += body.decode("utf-8", errors="ignore") + ' '  # Decode and concatenate the body
        if part.get_content_maintype() != 'multipart' and part.get('Content-Disposition') is not None:
            print("image content")
            image = part.get_filename().split('.')
            image_name = image[0] + id + "." + image[1]
            open('E:/' + image_name, 'wb').write(part.get_payload(decode=True))
        else:
            continue
    return whole_body

# This is done to make an SSL connection with GMAIL
con = imaplib.IMAP4_SSL(imap_url)

# Logging the user in
con.login(user, password)

# Calling function to check for email under this label
con.select('Inbox')

# Search for emails
result, email_ids = con.search(None, 'FROM "tchevres-24@peddie.org"','(BODY "From: Daily Dose <dailydose@peddie.org>")')

# Fetching the most recent email
email_ids = email_ids[0].split()
for email_id in email_ids[-1:]: #change to [-n:] for most recent n emails
    status, email_data = con.fetch(email_id, 'RFC822')

    # Parsing the email message
    email_message = email.message_from_bytes(email_data[0][1])

    # Decode the subject and print it
    # subject = decode_subject(email_message["Subject"])
    # print(f"Subject: {subject}")

    # Extract plain text content and print it
    plain_text = get_plain_text(email_message)
    # print(plain_text)
    
    body_html = get_body_html(email_message)


    # Save content to file with UTF-8 encoding
    with open('dailyDose.txt', 'w', encoding='utf-8') as file:
        file.write(plain_text)
        file.close()
    with open('dailyDose.html', 'w', encoding='utf-8') as file:
        file.write(body_html)
        file.close()

# Close the connection
con.logout()
