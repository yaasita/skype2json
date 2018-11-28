# skype2json

This script exports slack logs as json.

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

# output

    {
        "name": "from user name",
        "time": 1480751414,
        "text": "hello",
        "chat": "999",
        "date": "2016/12/13 16:50:14"
    }
