### Closures

The output of the sample code is 0 , because when the log function was define or created, the value of count was 0 and also the message variable was created using the value of count at that moment ie 0. So when the function log was created,as per the closure of that function it got access to its parents lexical environment , and to the value of message at the time when it got created , so the value of message "Count is 0" was used.

Even when we called the increment function for the variable count, it got incremented everytime,but we had not changed the value of message. and according the message stayed "Count is 0" and when log() got called it showed that message value.

the actually modify the message, the message variable could have been modified everytime in the increment() function , then the log would have printed the the message "Count is 3" ie with the current count.
