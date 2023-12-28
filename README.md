# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Planets fact site solution](#frontend-mentor---planets-fact-site-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Screenshot

![](/sreenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/HamDean/planets-fact-app)
- Live Site URL: [Add live site URL here](https://planets-fact-app-three.vercel.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- Typescript
- [Zustand](https://docs.pmnd.rs/zustand) - State management
- Tailwind CSS
- Mobile-first workflow

### What I learned

I learnt how to use React router to create multipage application using the new react router dom layout component.
I also learnt how to deploy application using vercel.
I learnt how to use Zustand to manage the state of my application

```ts
 createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PlanetPage />,
        children: [
          { index: true, element: <OverviewPage /> },
          { path: "structure", element: <StructurePage /> },
          { path: "surface", element: <SurfacePage /> },
        ],
      },
    ],
  },
]);

```

## Author

- Frontend Mentor - [@HamDean](https://www.frontendmentor.io/profile/HamDean)
- Twitter - [@hamdeen247](https://www.twitter.com/hamdeen247)
- github - [Nurudeen Hamzah](https://github.com/HamDean)
