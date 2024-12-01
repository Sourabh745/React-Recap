// Filename should be capital
function Youtube () {
    const username = "Sourabh"
    return (
        <>
            <h1>This is My Second time here {2+2}</h1>
            <h1>My name is {if(username === 'Sourabh') ? "yes": "no"}</h1> {/*  {} inside the braces are evaluate in createElement like imp has shown */}
        </>
    )
}
export default Youtube;

// imp
//const aReactElement = React.createElement(
    //     'a',
    //     {href: "https://google.com",target: "_blank"},
    //     'click me to visit google',
    //      username // this is ok.
    // exp need to be like these not like {if(username === 'Sourabh') ? "yes": "no"} .
    // )