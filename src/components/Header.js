const Header = () => {
    return(
        <div className="flex justify-between border border-solid border-black bg-black text-white">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>

            <div className="logo">
                <img src="https://images.squarespace-cdn.com/content/v1/56a2785c69a91af45e06a188/1610989066011-TAM2C1NWLRLL10HH3FMU/Restaurant-Logo-Designs.jpg?format=1500w">
                </img>
            </div>
            
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
    );
};

export default Header;