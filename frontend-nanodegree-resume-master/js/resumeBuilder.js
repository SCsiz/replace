 var bio = {
	"name": "James T Kirk",
	"role": "Captain",
	"contacts": 
	{
		"email": "Captain_1701@starfleet.com",
		"github": "captain_1701",
		"twitter": "@captain_1701",
		"location": "among the stars"
	},
	"picture": "images/kirk.jpg",
	"welcomeMessage": "Original captain of the starship Enterprise, boldy going where no one has gone before. Way better than Picard and Spock, everyone says so",
	"skills": ["Captaining", "Green women", "Away Team Leader", "Overacting", "Hotel, plane, and cruise savings"]
};

var work = {
	"jobs": [
		{
			"employer": "Starfleet",
			"title": "StarFleet Officer - Captain",
			"location": "San Francisco, Ca",
			"datesWorked": "2254 - 2371",
			"description": "Captain of the starship Enterprise"
		},
		{
			"employer": "Retired/dead",
			"title": "Stuck in the Nexus",
			"location": "Nexus",
			"datesWorked": "2371 - present",
			"description": "I was commissioning the Enterprise B on its maiden voyage when an energy anomoly appeared. We intercepted and in trying to save some of the crew, I was " +
				"swallowed into the Nexus rift where I have been chopping wood at my old home"
		}
		
	]
};

var education = {
	"schools": [
		{ "name": "Starfleet Academy",
			"datesAttended": "2250 - 2254",
			"location": "Fort Baker, Ca",
			"degree": "Captain",
			"major": "Starfleet Officer",
			"url": "www.Starfleet.com"
		}		
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Intro to Programming",
			"completed": "2016 - 2017",
			"url": "https://www.udacity.com"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Learn to Code",
			"datesWorked": "2016",
			"description": "Organize notes into an HTML page.",
			"images": ["images/udacity.png"],
			"url": "http://www.udacity.com"
		},
		{
			"title": "Stylish Website",
			"datesWorked": "2016",
			"description": "Personal web page utilizing CSS skills",
			"images": ["images/css.png"],
			"url": "http://www.udacity.com"
		},
		{
			"title": "Code your own quiz",
			"datesWorked": "2017",
			"description": "Fill-in-the-blank quiz coded using Python",
			"images": ["images/pythonlogo.jpg"],
			"url": "http://udacity.com"
		}
	]
};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);

		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();


$("#mapDiv").append(googleMap);
