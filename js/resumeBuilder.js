	var bio = {
		"name": "Wendy Jin",
		"role": "Web Developer",
		"welcomeMessage": "welcome to my resume page",
		"contacts": {
			"mobile": "1234-5678",
			"email": "jin@example.com",
			"github": "jin",
			"twitter": "@jin",
			"location": "Shanghai"
		},
		"skills": [
		"Using photoshop", "Japanese translation", "Singing", "Drawing"
		],
		"bioPic": "images/me.jpg"
	}

	var education = {
		"schools" : [
		{
			"name": "Shanghai Jiaotong University",
			"location": "Shanghai",
			"degree": "Masters",
			"majors": ["DESIGN & ARTS"],
			"dates": 2010,
			"url": "http://example1.com"
		},
		{
			"name": "Shanghai Jiaotong University",
			"location": "Shanghai",
			"degree": "BA",
			"majors": ["INDUSTRUAL DESIGN"] ,
			"dates": 2007,
			"url": "http://example2.com"
		},
		],
		"onlineCourses": [
		{
			"title": "JavaScript Crash Course",
			"school": "Udacity",
			"dates": 2018,
			"url": "http://www.udacity.com/nanodegrees/nd001-cn-basic"
		}
		]
	}

	var work = {
		"jobs": [
		{
			"employer": "Beijing News Co. Ltd.",
			"title": "Art Editor",
			"location": "Beijing",
			"dates": "May 2010 - May 2010 ",
			"description": "I worked for the News company to do netpage design. "
		},
		{
			"employer": "Shanghai Securities Co. Ltd.",
			"title": "Web Developer",
			"location": "Shanghai",
			"dates": "May 2015 - Future",
			"description": "I'm working for the Securities company to do netpage design, H5, coding html & javascript. "
		}
		]
	}

	var projects = {
		"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2018",
			"description": "My Resume's sample",
			"images": [
			"images/ps1.jpg",
			"images/ps2.jpg"
			]
		}
		]
	}

	bio.display = function() {
		var formattedheaderrole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedheaderrole);	

		var formattedheadername = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedheadername);


		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);

		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts").append(formattedEmail);

		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
		$("#topContacts").append(formattedGithub);

		var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts").append(formattedLocation);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
		
		var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
		$("#header").append(formattedBioPic);

		$("#header").append(HTMLskillsStart);

		for(var i=0; i<bio.skills.length;i++) {
			var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

	bio.display();

	work.display = function() {
		for (job = 0; job < work.jobs.length; job++) {

			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}

	work.display();

	projects.display = function() {
		for (project = 0; project < projects.projects.length; project++) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.projects[project].images.length > 0) {
				for (image = 0; image < projects.projects[project].images.length; image++) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}

	projects.display();


	education.display = function() {
		for (school = 0; school< education.schools.length; school++) {
			$("#education").append(HTMLschoolStart);

			var formattedschoolurl = HTMLschoolName.replace("#",education.schools[school].url);
			var formattedschoolName = formattedschoolurl.replace("%data%", education.schools[school].name);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);

			var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedschoolDates);

			var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedschoolLocation);

			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedschoolMajor);

		}
	}

	education.display();

	$(document).click(function(loc) {
		var x = loc.pageX;
		var y = loc.pageY;

		logClicks(x,y);
	});


	$("#mapDiv").append(googleMap);