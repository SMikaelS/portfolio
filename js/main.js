/**
 * @file main.js
 * @author Ali Bitar 
 * @date Jan 2018
 * @description This applicaiton presents Mikael Shamsie's portfolio 
 * @license MIT
 */



window.addEventListener("load",function(){
    const app = new Vue({
      el: '#portfolio',
      data: {
        title: "Mikael Shamsie",
        portfolioContent : [
        {
	        	id: 1,
	        	title: "Pole Werk",
						description: "Pole Werk is a Canadian ecommerce website",
						images: 'img/polewerklogo.jpg',
						longDescription: "Pole Werk is a Canadian ecommerce website that was launched in June 2018. It was created to give people across Canada access to pole dancing clothes and accessories. My three teammates and I created a comprehensive marketing plan for Pole Werk. This included ways to improve their Google Analytics, further optimize their on-page SEO and social media pages and strategies to improve their off-page SEO, as well as coming up with ads that they could run on Google and Facebook.<br>My focus was on creating a digital marketing measurement model, analyzing on-page SEO, breaking down a portion of the Google Analytics data we acquired, auditing their social media platforms and creating ad copy for their ad mock-ups.<img src='img/polework5.png'><img src='img/polework3.png'><img src='img/polework1.png'>"
				},
        	{
	        	id: 2,
	        	title: "RED Academy Workshop Facebook Ad Campaign",
						description: "A Facebook ad campaign for one of RED Toronto’s many workshops",
						images: 'img/redlogo.png',
						longDescription: "RED Academy are tech schools (in Toronto, London and Vancouver) that focus on digital marketing, web development and design. My partners and I came up with a Facebook ad campaign for one of RED Toronto’s many workshops, this one being their RED 101: Animation with CSS workshop.<img src='img/redfb1.png'>"
				},
        	{	
        		id: 3,
        		title: "Momnt Tech Inc",
        		description: "Momnt Tech is a Toronto based dating app",
        		images: "img/momntlogo.png",
        		longDescription: "Momnt Tech is a Toronto based dating app created in order to give young singles a chance to connect in real time and in real life. I worked within a team to develop a multifaceted marketing strategy for a campaign they were set to launch at the start of 2019. This strategy involved establishing Momnt’s brand, target audience, competitors, goals and benchmarks for its campaign and where and how it should advertise. <br>My role in this project involved an emphasis on branding, creating target personas, and coming up with potential ads and their copy as well as which ad platforms they should be used on.<img src='img/momnt1.png'><img src='img/momnt2.png'>"
        	},
        	{
        		id: 4,
        		title:"Ringside MD",
        		description: "Ringside MD is a healthcare provider that was launched in 2017.",
        		images: 'img/rs-logo-header.png',
        		longDescription: "Ringside MD is a healthcare provider that was launched in 2017. It was launched in order to provide workforces with comprehensive, personalized on-site healthcare in order to make them healthier, happier and more productive. My teammates and I worked on an inbound marketing strategy for Ringside that included a SWOT and competitor analysis, SEO and social media audits, buyer personas, a digital marketing model and a breakdown of Ringside MD’s website’s analytics, a campaign, promotional plan and a lead capture, nurture and scoring strategy.<br>I concentrated on Ringside’s branding, creating a buyer persona, SWOT and competitor analysis, blog strategy and lead nurturing.<img src='img/ringside1.png'><img src='img/ringside2.png'>"
        	},
        	{
        		id: 5,
        		title: "Sports Articles",
        		description: "Contributing writer for Cage Pages and then Fan Sided.",
        		images: 'img/fansidedlogo.jpg',
        		longDescription: "Articles I wrote as a contributing writer for Cage Pages and then Fan Sided.<br><a href='https://cagepages.com/author/mshamsie/'>Cage Pages</a><br><a href='https://fansided.com/author/mshamsie/'>Fan Sided</a>"
        	},
        	{
        		id: 6,
        		title: "Blog",
        		description: "My personal blog",
        		images: "img/bloglogo.png",
        		longDescription: "Posts on my personal blog.<br><a href='http://mikaelshamsie.com/blog/'>Blog</a>"
        	}

        ]
      }
    });

});




 //*** END 
