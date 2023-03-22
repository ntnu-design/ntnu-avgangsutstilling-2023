import re
import os


def parseStudent(directory):
    with open("{0}/content.md".format(directory), "r", encoding="utf8") as f:
        data = f.read()

    # Get slug from path
    slug = os.path.basename(os.path.normpath(directory))

    # extract bio information
    studentName = re.search(r'title: "(.*?)"', data, re.DOTALL)
    studentName = studentName.group(1).strip() if studentName else ""

    studentImage = re.search(r'profile_picture: "(.*?)"', data, re.DOTALL)
    studentImage = studentImage.group(1).strip() if studentImage else ""

    bio = re.search(r'bio: "(.*?)"', data, re.DOTALL)
    bio = bio.group(1).strip() if bio else ""

    portfolio = re.search(r'portfolio: "(.*?)"', data, re.DOTALL)
    portfolio = portfolio.group(1).strip() if portfolio else ""

    email = re.search(r'email: "(.*?)"', data, re.DOTALL)
    email = email.group(1).strip() if email else ""

    linkedin = re.search(r'linkedin: "(.*?)"', data, re.DOTALL)
    linkedin = linkedin.group(1).strip() if linkedin else ""

    twitter = re.search(r'twitter: "(.*?)"', data, re.DOTALL)
    twitter = twitter.group(1).strip() if twitter else ""

    facebook = re.search(r'facebook: "(.*?)"', data, re.DOTALL)
    facebook = facebook.group(1).strip() if facebook else ""

    behance = re.search(r'behance: "(.*?)"', data, re.DOTALL)
    behance = behance.group(1).strip() if behance else ""

    instagram = re.search(r'instagram: "(.*?)"', data, re.DOTALL)
    instagram = instagram.group(1).strip() if instagram else ""

    studyProgram = re.search(r'studyProgram: "(.*?)"', data, re.DOTALL)
    studyProgram = studyProgram.group(1).strip() if studyProgram else ""

    with open("{0}/bio.md".format(directory), "w", encoding="utf8") as f:
        f.write(f"""---
title: "{studentName}"
profile_picture: "{studentImage}"
portfolio: "{portfolio}"
email: "{email}"
linkedin: "{linkedin}"
twitter: "{twitter}"
facebook: "{facebook}"
behance: "{behance}"
instagram: "{instagram}"
studyProgram: "{studyProgram.lower()}"
slug: "{slug}"
---

{bio}
""")

    # extract project information

    for i in range(1, 6):
        project_title = re.search(
            "p{0}_headline_1: ".format(i)+r'"(.*?)"', data, re.DOTALL)
        project_title = project_title.group(1).strip() if project_title else ""

        project_heading = re.search(
            "p{0}_headline_2: ".format(i)+r'"(.*?)"', data, re.DOTALL)
        project_heading = project_heading.group(
            1).strip() if project_heading else ""

        project_image = re.search(
            "project_image_{0}: ".format(i)+r'"(.*?)"', data, re.DOTALL)
        project_image = project_image.group(1).strip() if project_image else ""

        project_desc = re.search(
            "project_desc_{0}: ".format(i)+r'"(.*?)"', data, re.DOTALL)
        project_desc = project_desc.group(1).strip() if project_desc else ""

        with open("{0}/project_{1}.md".format(directory, i), "w", encoding="utf8") as f:
            f.write(f"""---
title: "{project_title}"
heading: "{project_heading}"
image: "{project_image}"
---

{project_desc}
""")


# Walk recursively all folders inside study programs and check if the folder contains content.md
for studyDir in os.walk(os.getcwd()):
    if studyDir[2].__contains__("content.md"):
        parseStudent(studyDir[0])
