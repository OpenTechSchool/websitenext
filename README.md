# Website in Nextjs

## Requisit:

`Node version > 9`

`npm`


## How to start the project:

1. `npm i`
2. `npm run dev`
3. open `http:localhost:3000`

## Idea behind this MVP:
What i want to achive with this MVP is to show how we can easily and fast build the next OTS 
website with Nextjs framework keeing in mind the three main obstacle we previously had:
- easy to build UI
- easily transfer our existing markdown
- provide multilanguage functionality

I choose Nextjs because i have good experience with it and this allow me to be fast and easily solve 
possible encountred problems.
My experience with it also make me believe is a great framework for static site generation because of 
is very good SSR support, simple,standard and easy to customize file structure, super simple routing support,
usage of React which nowday many developers knows how to use and is very easy to learn for whoever has 
javascript skills.
Nevertheless i'm open to discuss any other solutions if someone believes those are not good reasons to use it.

Let's go trough the main goals of our website and how i try to achive them in this MVP:
1. easy UI
I belive the best option would be to build our own UI solutions but we cannot afford to spend all the time on this
so we have to rely on already existing library which must be very complete but also flexible enough to be custimize.
Here i use Material UI. 
I think is very reliable library since is broadily use and is around since long time. It provides a good and easy 
usage for React and many already ready components and icons. 
It also provides different ways to custimize it. 
I'm not very happy with the way how is customize it because it havily use css in js, which in my opinion is not 
very flexible in the case in the future we will want to transfer to another system.
Maybe i didn't find a proper solutions for this, but so far i would be happy to know if there is something better then this.

2. easily transfer markdown
Right now is very easy to transfer all our existing content. 
We will need to put them just in the data/ folder exctly how they are and then we simply transform them in content that react
can read and inject in the html.
Another thing i like a lot of this solutions is that allow each chapter to care about just their own city markdown, modifying just one file. 
Other component will take care of displaying in the right place and Nextjs routing take care of the rest.

3. Multilanguage
The current solutions provide a simple language dropdown component that can be add where ever is needed. 
This means that if a page doesn't have translation, it will not have this component and it will simple be one language page.

Another interesting distinction is between general website translation and chapter translation.
Right now all the common wbesite translation are together in a json file but each city translation are per se. 
Which means that each chapter will be able to add how many translation they want and they will be able to do that 
simply adding an extra markdown file in data/[new_language]/ and once again they don't have to worry about any other part of the app.
Hopefully this will simplify how people can contribute. 


Last but not least, with this MVP i would like to provide a structure solid enough that anybody that has the skills and the design 
mock up can jump in and help in the development, indipendently if they can spend sme hours or rather some days on the project. 
 

