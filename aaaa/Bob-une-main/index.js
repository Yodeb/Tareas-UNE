const hey = (msg) => {
    msg = msg.trim()
    if(msg.toUpperCase()==msg && msg[msg.length-1]=="?" && /[a-zA-Z]/g.test(msg))
        return "Calm down, I know what I'm doing!";
        
    if(msg[msg.length-1]=="?" )
        return 'Sure.';

    if(msg.toUpperCase()==msg && /[a-zA-Z]/g.test(msg))
        return 'Whoa, chill out!';
    
    if(msg.toUpperCase()==msg && msg[msg.length-1]=="?" && /[a-zA-Z]/g.test(msg))
        return "Calm down, I know what I'm doing!";

    if(msg=="")
        return 'Fine. Be that way!';

    return 'Whatever.';
}

module.exports = {
    hey
}