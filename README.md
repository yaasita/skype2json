# skype2json

This script exports slack logs to json.

# Install

    npm install

# Usage

## 2016 format

    # input => C:\Users\username\AppData\Roaming\Skype\username\main.db
    node skype2json_v2016.js in/main.db

## 2017 format

    # input => C:\Users\username\AppData\Local\Packages\Microsoft.SkypeApp_kzf8qxf38zg5c\LocalState\username\skype.db
    node skype2json_v2017.js in/skype.db

## 2018 format

    # input => C:\Users\username\AppData\Local\Packages\Microsoft.SkypeApp_kzf8qxf38zg5c\LocalState\s4l-username.db
    node skype2json_v2018.js in/s4l-username.db

## After 2021

Look here  
https://support.skype.com/en/faq/FA34894/how-do-i-export-my-skype-files-and-chat-history
