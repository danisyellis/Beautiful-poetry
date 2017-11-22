# Poet-ion: (PO-SHUN)
Our Turkey-Week-Hackathon project to make beautiful visualizations of poetry!

### Contributors Patrick Kallas, Rhonda Brown, Dani Gellis, Jonathan Mitchell.
---
## Instructions:
1. `npm run build`: Runs application build for client side.
2. `npm run webpack:server`: Developement Server? !! What does this command do?
3. `npm run start:dev`: Starts the developement server.

---
## MVP Specs:
- [ ] user can navigate to homepage
- [ ] user can submit a poem through a form component
- [ ] user can see the poem rendered after submission
- [ ] user can clear out current poem and submit new poem
- [ ] poem is presented as simple animation in main view


## Stretch Specs:
- [ ] certain words in poem are animated- like colors become the color and water words move like ocean waves
- [ ] working with a poetry API to grab poems (maybe start with women poets or quotes from awesome women)
- [ ] store poems and users (and make that accessible to user)
- [ ] turn poems into downloadable/linked gifs
- [ ] AR functionality

---

## Rubric
- [ ] MVP delivers on specs and works: 100 pts
- [ ] Specs were ambitious: 25pts
- [ ] App creativity: 25pts
- [ ] Documentation: 10pts
- [ ] Code: 60pts
  - Format: 15pts
  - Readability: 30pts
  - File structure: 15pts
  
  ---
  
  ## Technologies Used:

- JavaScript
- Express
- React
- Pixi.js
- React-Pixi
- Webpack


## Wireframes

#### Home Page:
![alt-text][wf-01]
#### Utility Bar:
![alt-text][wf-02]

[wf-01]: http://res.cloudinary.com/ontoneio/image/upload/c_scale,w_600/v1511231315/Poet-ion/poet-ion_wireframes_1.jpg "Home Page Layout"
[wf-02]: https://res.cloudinary.com/ontoneio/image/upload/c_scale,w_600/v1511231318/Poet-ion/poet-ion_wireframes_2.jpg "Form Layout"

### Project Challenges:
- Integrating React with a canvas drawing library.
- Laying out off screen elements with react.
- rendering animated text.