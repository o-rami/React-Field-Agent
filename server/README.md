# Field Agent Plan

## Security Clearance

### Domain Rules

* Security clearance name is required.
* Name cannot be duplicated.

#### Examples

`securityClearanceId` = 1, `name` = "Confidential"

`securityClearanceId` = 2, `name` = "Top Secret"

`securityClearanceId` = 3, `name` = "Secret"

~~`securityClearanceId` = 4, `name` = "Secret"~~

### Model

* [x] `SecurityClearance`
  * private int securityClearanceId
  * private String name

### Find all security clearances

* [x] Add `SecurityClearance` to AgencyAgent
* [x] Add `SecurityClearanceMapper`
* [x] Add method to find all securityClearances in `SecurityClearanceJdbcTemplateRepository.findAll()`

### Find a security clearance by its identifier

* [x] Add method to find by identifier securityClearances in `SecurityClearanceJdbcTemplateRepository.findById()`

### Add a security clearance

* [x] Add `SecurityClearanceRepository`
  * [x] Add `add` method `SecurityClearance add()`
* [ ] Add `SecurityClearanceService`
  * [x] Add `add` method: `Result<SecurityClearance> add()`
  * [x] Add validations
* [x] Add `SecurityClearanceController`
  * [x] `ResponseEntity<Object> add()`
    * 201 if success
    * 400 if invalid

### Update a security clearance

* [x] Repository `boolean update()`
* [x] Service `Result<SecurityClearance> update()`
* [x] Controller `ResponseEntity<Object> update()`
  * 404 if not found
  * 400 if invalid
  * 204 if success
  * 409 for id mismatch

### Delete a security clearance

* Only allow deletion if a security clearance key isn't referenced
* [x] Repository `boolean deleteById()`
* [x] Service `boolean deleteById()`
* [x] Controller `ResponseEntity<Object> deleteById()`
  * 404 if not found
  * 204 if success

## Alias

### Domain Rules

* Name is required.
* Persona is not required unless a name is duplicated. The persona differentiates between duplicate names.

#### Examples

`name` = "Nutmeg", `persona` = null
`name` = "Nutmeg", `persona` = "Mysterious, like eggnog"
~~`name` = "Nutmeg", `persona` = "Mysterious, like eggnog"~~

### Model

* [x] `Alias`
    * private int aliasId
    * private String name
    * private String persona
    * private int agentId

### Fetch an individual agent with aliases attached

* [x] Add list of `Alias` to `Agent`
* [x] Add `AliasMapper`
* [x] Add method to add aliases in `AgentJdbcTemplateRepository.findById()`

### Add an alias

* [x] Add `AliasRepository`
    * [x] Add `add` method `Alias add()`
* [x] Add `AliasService`
    * [x] Add `add` method: `Result<Alias> add()`
    * [x] Add validations
* [x] Add `AliasController`
    * [x] `ResponseEntity<Object> add()`
        * 201 if success
        * 400 if invalid

### Update an alias

* [x] Repository `boolean update()`
* [x] Service `Result<Alias> update()`
* [x] Controller `ResponseEntity<Object> update()`
    * 404 if not found
    * 400 if invalid
    * 204 if success
    * 409 for id mismatch

### Delete an alias

* [x] Repository `boolean deleteById()`
* [x] Service `boolean deleteById()`
* [x] Controller `ResponseEntity<Object> deleteById()`
    * 404 if not found
    * 204 if success

## Global Exception Handling

* [x] @ControllerAdvice annotation
* Catch and handle:
  * [x] most precise exception for data integrity failures
  * [x] A "catch-all" 