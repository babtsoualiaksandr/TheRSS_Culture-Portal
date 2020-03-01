# TheRSS_Culture-Portal
The goal is to make content project quickly using available simple tools, distriburing work and helping each other
### worklog

To show process of development it needs to describe small amount of time and what work was accomplish by whom during that time.

#### Example

You need to provide high level, feature base (what need to score) description. 

*davojta*

| time spent | feature |
|-------------|-------------|
| 2h | base structure of the project with CRA |
| 10h | put content in json |
| 4h | setup image gallery |


*petriken*

| time spent | feature |
|-------------|-------------|
| 3h | design and markup for main page |
| 2h | markup for author page |
| 4h | setup geowidget |


## Technical requirements
The portal must contain the following components / functional parts / blocks:

* Main page with
  * portal's description
  * 'author of the day' block
  * developer team description (userpics + github accounts + nicknames/names), and contribution of each member
* Navigation
* Page with a list of authors on the given topic with search widget
  * search should be on the current language with ability to search by name, city/place of birth
  * 5-7 authors are enough to complete the task successfully. You can take more, if you have enough time and willingness
* Page of an author with
  * Author's name
  * Years of life
  * his/her picture
  * biography in the form of timeline (example [here](https://reactjsexample.com/a-vertical-timeline-component-for-react/))
  * list of artist's works with the date of creation
  * photo gallery with author's picture and pictures of his/her works 
  * youtube video about the author / works / period of time author lived. Video must open in a new overlay (modal)
  * place of author's major activity on a map: google / openstreetmap (leaflet) / yandex
  * it's fine if **not** every element (timeline, video, photo gallery, map) will be present on every page
* Web portal must be deployed on Github Pages / netlify / google firebase / etc
* Web portal has to be in 3 languages - by, ru, en. Content may vary for each version but interface elements have to be translated. For this purposes you can use this library https://www.i18next.com/ or any similar;

Portal should be relatively correctly displayed on tablets and mobile phones.

Content for the portal (texts, facts + year for a timeline, photo for a gallery, youtube video, place of life / activity) can be taken from Wikipedia, YouTube, Google etc.

Design example / UX:

- http://ses.fi/en/films/categories/documentaries/
- https://www.aia.org/aia-architects?filters=typeFilters%3A2496%3B
- https://literature.britishcouncil.org/writers/?Genre=3

Galleries / timelines / overlays can be found here - https://bestofjs.org/.

Design / appearance is **important** for this task. The text / timeline / button for video / photo gallery / search control on the page with a list of authors are important as general look and feel.

## Technical limitations
You **should** develop portal using libraries of visual components such as **material-ui** or **bootstrap**.

You **should** use *Reactjs* or use *gatsbyjs* to get additional points.

Such things as page content and internal data structures for timeline / search / map / photo gallery / video overlay have to be considered on your own.

## How to submit
You'll have to fill in the [the form with participants and link to github page](https://docs.google.com/forms/d/e/1FAIpQLSdzeXPJRR2oHZEWafgaE--9UzJC_ofNAxbJ9IqwEo6jElF-AQ/viewform) before the deadline.

Team member with the lowest rating in the group that takes part in the task has to make a presentation of his/her team's project. During the presentation the following things have to be shown:

- readme with self evaluation and worklog
- PR of all team members
- main page;
- list of authors with search field (filtering);
- author's page with photo gallery, timeline and video;
- 1-3 difficulties occurred during teamwork;

Presentations will be online in 2 sessions of 2 hours each with Dzianis Sheka and Dzmitry Varabei as examinators. 
## Requirements for commits, PR, repository
[General requirements from stage 2](https://github.com/rolling-scopes-school/docs/blob/master/ru/stage2-tasks-requirements.md).

## Evaluation

Mark will be the same for all team members based on the result of presentation.

Maximum points - **240**

### Min scope - **40**
- [ ] **10** Main page + page with a list of authors + author's page (only html);
- [ ] **10** Page with list of authors contains search widget;
- [ ] **20** Portal has two languages;

### Normal scope - **130**
- [ ] **10** Author's page contains timeline;
- [ ] **10** Author's page contains video overlay;
- [ ] **20** Author's page contains photo gallery;
- [ ] **10** Author's page contains map (geowidget);
- [ ] **from 10 to 40** Project is made using react (max 40 - if all widgets are done in React);
- [ ] **from 0 to 20** Design;
- [ ] **20** material-ui / bootstrap is used 

### Extra scope - **70**
- [ ] **10** Confidence of the project presentation;
- [ ] **30** Project is made using gatsbyjs;
- [ ] **20** contentful / netlify cms is used for content management
- [ ] **10** Portal has third language;

### Fines
- **-100** if there are less than 5 commits from each active team member. Everyone should merge their own PRs. 
- up to **-50** points for violations
[stage2-tasks-requirements](https://github.com/rolling-scopes-school/docs/blob/master/ru/stage2-tasks-requirements.md)
- **-40** if there is no worklog for team
- **-20** too primitive (ugly for 2019) design / UX

## examples
* https://github.com/rss-com-lab/staging-alesya-website - gatsby with translation
* https://alesia-ivankova.github.io/ - deployed version
* https://grnkvch.github.io/CodeJam-Culture-Portal/en/ - gatsby with good design and translation

## answers to the questions
* https://drive.google.com/open?id=1nBMuIWEZ3-pJIlABGWkH-wgJLdj8OP7t - xmind with answers
* https://www.youtube.com/watch?v=mstHfkOk4zQ&list=PLe--kalBDwjiBYlF6OivjURvvJg58tYY2&index=14&t=0s - стрим набора 2018q3 с ответами на вопросы 


## Who review the tasks?
@davojta / @dzmitry-varabei / @rs-activists

It will be couple of evening for online presentations in skype
