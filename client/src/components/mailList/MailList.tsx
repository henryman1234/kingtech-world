import "./mailList.scss"

const MailList = function () {
    return (
        <div className="mailList">
            <div className="mailTitle">Save money, save time</div>
            <div className="mailDesc">Sign up and we'll send</div>
            <div className="mailInputContainer">
                <input type="text" placeholder="Votre Email"/>
                <button>S'abonner</button>
            </div>
        </div>
    )
}

export default MailList