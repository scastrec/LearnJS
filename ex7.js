/**  Playing with strings
 depending on input response match value

 world => print 'Hello World'
 stephane => print 'Hey Stephane'
 default => print 'Default value'
*/
console.log(process.argv)

function print(str) {
    switch (str) {
        case 'world':
            console.log("Hello " + str);
            break;
        case 'stephane':
            console.log("Hey " + str);
            break;
        default:
            console.log("default value");
            break;
    }
}

print(process.argv[2], true)
