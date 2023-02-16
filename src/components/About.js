


export default function About(props) {

  let textFont = {
    fontFamily: 'Arial, sans-serif'
}

    let textStyleAbout = {
        color: props.mode === 'dark'?'white': '#252729',
        backgroundColor: props.mode === 'dark'? '#252729': 'white',
        fontFamily: 'Arial, sans-serif', fontSize: '14px' 
    }
    

    return ( 
        <>
        <div className="container my-5" style={{width: '1000px', wordWrap: 'break-word', whiteSpace: 'pre-wrap'}}>
            <div >
            <p style={textStyleAbout}>
  Welcome to <strong>WordGod</strong>, the ultimate online text tool for all your writing needs! With WordGod, you can easily convert your text to uppercase, lowercase, remove extra spaces, count words, and even copy to clipboard with just a few clicks. 
</p>

<p style={textStyleAbout}>
  Our user-friendly interface makes it easy to use, no matter your level of technical expertise. Whether you're a student, professional writer, or anyone in between, WordGod is here to help you get the job done. 
</p>

<p style={textStyleAbout}>
  With the ability to convert text to uppercase and lowercase, you can ensure that your writing is properly formatted, no matter the style or tone you're trying to achieve. And with our extra space removal feature, you can keep your writing clean and concise, without any distracting gaps or line breaks. 
</p>

<p style={textStyleAbout}>
  In addition, WordGod provides you with a convenient word counting tool, so you can keep track of your word count and make sure you're hitting your writing goals. And, when you're done, you can easily copy your text to the clipboard and paste it wherever you need.
</p>

<p style={textStyleAbout}>
  So why wait? Try WordGod today and start creating amazing content in no time!
</p>
            </div>
        </div>

        <div style={{position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',...textFont}}>
            <p style={textStyleAbout}> made in ❤️ by Aditya</p>
        </div>
        </>
    )
}
