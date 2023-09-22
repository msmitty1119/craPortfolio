const ContactMe = () => {
    return (
        <div>
            <div id="profilePic">
                <img
                    src="profile-default-male-nyg4vc4i3m1d5pote7rfsv4o4c7p5ka5an0pselxcc-nyhjt6b1oifa23xq2ehfxoh9vink6vuxyns1y35vkc.png"
                    alt="portfolio image"
                    className="rounded-circle float-end border border-success"
                />
                <h1 className="display-1" id="contactMe">John Doe</h1>
            </div>
            <div id="profileText">
                <h5>Email: johndoe@johndoe.com</h5>
                <h5>Mobile Number: (000) 000-0000</h5>
                <p>
                    <b>
                        <a target="_blank" href="https://www.linkedin.com">LinkedIn URL</a>
                    </b>
                </p>
            </div>
        </div>
    );
}

export default ContactMe;
