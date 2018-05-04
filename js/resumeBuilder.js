	var bio = {
		"name": "Wendy Jin",
		"role": "Web Developer",
		"welcomeMessage": "welcome to my resume page",
		"contacts": {
			"mobile": "+86-13512345678",
			"email": "jin@example.com",
			"github": "wendyjin",
			"twitter": "@wendyjin",
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
			"url": "http://example.com"
		},
		{
			"name": "Shanghai Jiaotong University",
			"location": "Shanghai",
			"degree": "BA",
			"majors": ["INDUSTRUAL DESIGN"] ,
			"dates": 2007,
			"url": "http://example.com"
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
			"employer": "Shanghai Securities News Co. Ltd.",
			"title": "Art Editor",
			"location": "Shanghai",
			"dates": "May 2010 - Future",
			"description": "I'm working for the News company to do netpage design, H5, coding html & javascript. "
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
			"http://news.cnstock.com/event/2018lh/banner.jpg",
			"http://news.cnstock.com/event/2018bzll/banner.jpg"
			]
		}
		]
	}

	if(bio.name.length > 0) {
		var formattedheadername = HTMLheaderName.replace("%data%", bio.name);
		$("#header").append(formattedheadername);
	}

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);

	}

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}