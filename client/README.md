# Web Field Agent

* Use the Field Agent HTTP Service from M7
* Create a new browser-based web application using HTML/CSS/JS

## High-Level Requirements

* [x] Display all agents
* [x] Add an agent
* [x] Update an agent
* [x] Delete an agent

### Start

* HTML:
  * [x] Create basic HTML template
  * [x] Add a navbar (Agents, Agencies, missions, locations, and aliases), 
    * only provide Agent functionality
* JS:
  * [x] Create empty/current agent objects
  * [x] grab default api url

### Display All Agents
* [x] Create read-only list display
  * Priority info: ID, Name, ?height?
    * middle name/DoB optional...
* Tabular
* [x] Display message for failed to fetch

* STRETCH: look into adding sortBy functionality... (by name asc/desc, id asc/desc)

### Add An Agent
* [x] ADD NEW AGENT Button
  * [x] onclick change to form view
  * [x] create form for all params
* [x] Cancel
* [x] Submit
  * Submit will save/submit addition to DB/list
  * Cancel will exit form view
  * [x] reset form
* [x] Validation, Display err/success messages for each path

### Update An Agent
* [x] EDIT Button
  * [x] onclick change to form view
  * [x] also preload respective agent params
* [x] Cancel
* [x] Submit
  * Submit will update addition to DB/list
  * cancel will exit form view
  * [x] reset form
* Display err/success for each

* STRETCH: show related data
  * aliases, missions, agencies, etc

### Delete an Agent
* [x] DELETE button
  * [x] onclick change to delete confirmation view
    * final confirmation?
* [x] DELETE
* [x] CANCEL
  * Display agent summary
    * DELETE forever? => exit confirmation view
  * cancel => exit confirmation view
* Display messages

### General Final Improvements
* [x] Hide/display windows on commands
* Pull in bootstrap
  * Checkout alternatives
  * Give everything some space
