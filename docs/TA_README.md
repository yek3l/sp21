# TA ReadMe

For TAs who are looking to set up and configure the website, this doc will help get you started!

## GitHub

It's assumed you already have Git and know how to use it, but in case you need to install it Here's a really clear [guide](http://kbroman.org/github_tutorial/pages/first_time.html) that Karl Broman has created. Once that's done, follow these steps:

1. Get a copy of the repository
    * If you're getting the repository straight from the original (cs10-react), then fork the repository.
    * If you're getting it from a previous semester, clone it.
    * Make sure the repository name follows the convention Semester+Year (e.g. fa20, sp20, etc.).

2. In your local repository, make sure you have a remote pointing to the original cs10-react repo. This makes it possible for you to receive any updates/fixes to the
  website.

## Pre-Setup

For TAs looking to set up the website, make sure you have the following tools.

1. Node + Node Package Manager (npm)
    * Install with Homebrew
    * ```$ brew install node```

2. Dart Sass
    * Make sure to use Homebrew for this as well, using npm will install a different version of Sass
    * ```$ brew install sass/sass/sass```

3. Gatsby CLI
    * Command Line Interface for Gatsby
    * ```npm install -g gatsby-cli```

## Setup

Once you've made sure you have the tools above, let's get the actual website on your computer.

1. Clone the repository

2. Install the dependencies for the project (or else nothing will work)
    * ```$ cd <wherever your repo is>```
    * ```$ npm install```

3. Go to package.json and change the "url" under the "repository" field. This doesn't affect deployment, but helps identify where the source code for the current repository is.

4. Go to the ```gatsby-config.js``` file and change pathPrefix to the semester that the iteration of the website will fall under (e.g. fa20, sp20, etc.). This _will_ affect deployment.

5. Time to deploy locally!

## Running the website locally

There are a couple of options on how you can run the website locally. They aren't alternatives for one another and have specific purposes. These configurations are all defined in the ```package.json``` file under the "scripts" field. If you do decide to add more, make sure to document it!

### Ways you can run the server

* Development Server
  * ```npm run develop```
* Production Server
  * ```npm run serve```
* Local Network Servers
  * ```npm run mobile-dev```
  * ```npm run mobile-serve```

#### Development Server

The development server is the primary one you'll be working with. It deploys to ```localhost:8000``` usually, and features hot-reloading so that any changes you make will be reflected (almost) instantly. *However*, the development build is not built quite the same way as the production build, so any deployments should be checked using the Production Server first.

#### Production Server

The production server runs the "public" build of the website. This build is an optimized version of what you were testing in development, but this also means that inconsistencies occasionally arise between the development build and the production build. Running the production server will also require you to manually rebuild the website using ```$ npm run build``` as it doesn't include hot-reloading.

#### Local Network Server

These servers are the same as the development/production server, but they can be accessed via your local network so you can test out other devices, namely *phones*. It's not sufficient to use emulators found on common browsers like Google Chrome (although they're still super helpful). On a secure network, run either server and connect to the url provided in your phone's browser. This will give you the best sense of how the website will look.

## Deployment

Once you're ready to deploy the website, run the following command: ```npm run deploy```.
This should automatically build the website, and deploy it to github pages. Generally speaking, the initial deployment will take a few minutes to become visible. Subsequent deployments however, should be reflected relatively quickly. Generally speaking, it's good to give the website ~10 minutes to reflect changes + a hard refresh (```cmd+shift+r```) to see the changes. Incognito mode also works.

Congrats! The website is now officially deployed to Github Pages!

### Next Steps

Now you'll probably need to configure the website. Check out this section in the docs to get going with that.
