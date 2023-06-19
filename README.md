# Assessment 9: React Field Agent

## Goal
* Start a React front-end for the Field Agent HTTP service.

## High-Level Requirements
* Implement a full CRUD UI for agents (display, add, update, and delete).
* Implement the required client-side routes.
* Display a "Not Found" message if a route doesn't match one of the defined routes.
* Create React components as needed to support the required client-side routes.

### Features
* Navigation
* Display All Agents
* Add An Agent
* Update An Agent
* Delete An Agent
* Client-Side Routes
  * "Home" / - Renders a component that displays a welcome message and a link to the "Agents" route
  * "Agents" /agents - Renders a component that displays a list of agents
  * "Add Agent" /agents/add - Renders a component that displays a form to add an agent
  * "Edit Agent" /agents/edit/:id - Renders a component that displays a form to edit the agent specified by the :id route parameter
  * "Delete Agent" /agents/delete/:id (optional) - Renders a component that displays a confirmation message to delete the agent specified by the :id route parameter
  * "Not Found" - Renders a component that displays a friendly "not found" message if the requested route doesn't match one of the defined routes

### Technical Requirements
* Use Create React App.
* Use fetch for async HTTP.
* Use React Router to implement the client-side routes.
* Use React Router's `navigate` hook to programmatically redirect users and `useParams` hook to access parameters, paths, and other data.
* Use a CSS framework.

### Approach (finer details to be added)
* Create components as needed

* [x] Import BrowserRouter/Router/Route into App.js 
  * [x] Revamp App by routing to each path/element
	* Home/Agents/Add-Agent/Edit-Agent/Delete-Agent/Not-Found
* [x] Create Error/NotFound Components
  * [x] Wildcard * for not found 
* [x] Create Separate AgentAPI Service Component
  * [x] URL constant, helper function for init creation (DRY)
  * [x] Implement findAll fetch
* [x] Implement findById
* [x] Implement add
  * [x] Plug into `<AgentList/>`, `<Link>`
  * Decided to add to table, since an add agent button on the header might not work with future CRUD additions
* [x] Implement update/edit
    * [x] Plug into `<AgentList/>` component
* [x] Implement delete
    * [x] Plug into `<AgentList/>` component
### Stretch Goals
* Add client-side routes and placeholder components for all of the top-level sections of the application.
* Add an alias CRUD UI.
* [x] Add an agency CRUD UI.