# Configuring the Website

The website's designed in a way where you can configure the data (links & other things being displayed),
as well as most of the UI so you can avoid having to modify the actual html/sass/js. Whether it's for deploying
the site or updating parts of it, this section should cover all the bases.

## Course Data Configuration

### Stuff you'll be working with

All course data is located in the `static/course-data` folder. There are a few files that you should note here.

1. `general.config`: small file that currently just defines the start and end of the semester. Not the most important thing though.
2. `curriculum/content-structure`: a file that defines the order of content for the given semester.
3. `curriculum/<content>-data`: files that provide a mapping to links and labels for course content, e.g. links to lab page and checkoff.

### How the website uses content-structure + content-data

In a nutshell, the website uses content-structure as reference for how content is organized in a given semester. Each of its values
contains keys in the various content-data files, for different sections, and it'll use these keys to pull all the relevant links
you'd like to display on the site.

### How to define content-data

Adding/Updating stuff in content-data is simple. You just need to add a new key to the json file and make sure it has a title at the bare minimum.
For any links you'd like to display (like "lecture slides" or "solutions"), just add keys to the value:

```json
{
    "uniqueKey" : {
        "title" : "A title goes here",
        "linkKey1": "link url",
        "linkKey2": "link url"
    }
}
```

You can also add an array of links for any non-standard links you'd like to associate with a particular piece of content. These are usually extra resources
like additional notes. Instead of providing a string, you can just provide an array of objects with a "title", and "link" key.

```json
{
    "uniqueKey" : {
        "title": "Another title here",
        "linkKey1": "link url",
        "manyLinks" : [
            {
                "title" : "resource link 1",
                "link" : "url here"
            },
            {
                "title" : "resource link 2",
                "link" : "url here"
            }
        ]
    }
}
```
