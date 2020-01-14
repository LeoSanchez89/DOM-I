const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png"
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io"
	},
	footer: {
		copyright: "Copyright Great Idea! 2018"
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// nav
let navBar = document.querySelectorAll("a");
navBar[0].textContent = siteContent["nav"]["nav-item-1"];
navBar[1].textContent = siteContent["nav"]["nav-item-2"];
navBar[2].textContent = siteContent["nav"]["nav-item-3"];
navBar[3].textContent = siteContent["nav"]["nav-item-4"];
navBar[4].textContent = siteContent["nav"]["nav-item-5"];
navBar[5].textContent = siteContent["nav"]["nav-item-6"];

let Navigation = document.querySelector("nav");

let newLink = document.createElement("a");
let newLink2 = document.createElement("a");

newLink.textContent = "Sign Up";
newLink2.textContent = "Location";

Navigation.appendChild(newLink);
Navigation.prepend(newLink2);

newLink.style.color = "green";
newLink.style.fontWeight = "bold";
newLink2.style.color = "green";
newLink2.style.fontWeight = "bold";

Array.from(navBar).forEach(navBar => {
	navBar.style.fontWeight = "bold";
	navBar.style.color = "green";
});

// header
let title = document.querySelector("h1");
title.textContent = siteContent["cta"]["h1"];

let button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"];

let headerPic = document.querySelector("#cta-img");
headerPic.setAttribute("src", siteContent["cta"]["img-src"]);

// main-content
let middleTitle = document.querySelectorAll("h4");
middleTitle[0].textContent = siteContent["main-content"]["features-h4"];
middleTitle[1].textContent = siteContent["main-content"]["about-h4"];
middleTitle[2].textContent = siteContent["main-content"]["services-h4"];
middleTitle[3].textContent = siteContent["main-content"]["product-h4"];
middleTitle[4].textContent = siteContent["main-content"]["vision-h4"];

let middleText = document.querySelectorAll("p");
middleText[0].textContent = siteContent["main-content"]["features-content"];
middleText[1].textContent = siteContent["main-content"]["about-content"];
middleText[2].textContent = siteContent["main-content"]["services-content"];
middleText[3].textContent = siteContent["main-content"]["product-content"];
middleText[4].textContent = siteContent["main-content"]["vision-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// contact
middleTitle[5].textContent = siteContent["contact"]["contact-h4"];

middleText[5].textContent = siteContent["contact"]["address"];
middleText[6].textContent = siteContent["contact"]["phone"];
middleText[7].textContent = siteContent["contact"]["email"];

// footer
middleText[8].textContent = siteContent["footer"]["copyright"];

// siteContent[""][""];
