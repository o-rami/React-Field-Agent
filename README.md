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

### Create new components as needed to support the above routes:
* Component to display all agents
* Component to add an agent
* Component to update an agent
* Optionally, a component to delete an agent (it's okay to handle delete from the list component).

### Technical Requirements
* Use Create React App.
* Use fetch for async HTTP.
* Use React Router to implement the client-side routes.
* Use React Router's `navigate` hook to programmatically redirect users and `useParams` hook to access parameters, paths, and other data.
* Use a CSS framework.

### Approach (finer details to be added)
* [ ] Create Separate AgentAPI Service Component
  * [ ] Implement findAll fetch
    * [ ] Plug into list component
* [ ] Implement findById/add/update/delete
  * [ ] Plug into form with the help of useState/useParams/useNavigate
* [ ] Double back and reimplement buttons with `<Link to=""></Link>
* [ ] Create Error/NotFound Components
* [ ] Import BrowserRouter/Router/Route into App.js 
  * [ ] Revamp App by routing to each path/element
	* Home/Agents/Add-Agent/Edit-Agent/Delete-Agent/Not-Found

### Stretch Goals
* Add client-side routes and placeholder components for all of the top-level sections of the application.
* Add an alias CRUD UI.
* Add an agency CRUD UI.
* Show and edit relationships between agents and agencies.