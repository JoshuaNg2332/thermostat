Thermostat Challenge
=================

Alrighty. Now that you've got the basics under your fingers, it's time for a new domain.

In this challenge, you will build the logic needed to model a simple thermostat.


Planning:
-------
#### Functionaility

Specification:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default but it can also be turned off
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, <= 25 is `medium-usage`, anything else is `high-usage`.

#### Step 1:

* Spec 1

```
Thermostat starts at 20 degrees
```

Input:      Output:
(On Load)   Thermostat starts at 20 degrees

* Spec 2

```
You can increase the temperature with an up function
```

Input:            Output:
UserInput up      Temperature goes up by 1

* Spec 3

```
You can decrease the temperature with a down function
```

Input:            Output:
UserInput down    Temperature goes down by 1

* Spec 4

```
The minimum temperature is 10 degrees
```

Input:            Output:
(On Load)         Temperature min is set to 10

* Spec 5

```
If power saving mode is on, the maximum temperature is 25 degrees
```

Input:            Output:
UserInput up(6)   Temperature won't go past 25 degrees

* Spec 6

```
If power saving mode is off, the maximum temperature is 32 degrees
```

Input:            Output:
UserInput up(13)  Temperature won't go past 32 degrees

* Spec 7

```
Power saving mode is on by default but it can also be turned off
```

Input:            Output:
(On Load)         Power Saving mode turned on
UserInput pwrS    Toggles Power Saving mode off/on

* Spec 8

```
You can reset the temperature to 20 with a reset function
```

Input:            Output:
UserInput reset   Temperature will reset to default 20 degrees

* Spec 9

```
You can ask about the thermostat's current energy usage: < 18 is `low-usage`, <= 25 is `medium-usage`, anything else is `high-usage`.
```

Input:            Output:
(On Load)         'medium-usage' indicator
UserInput up(6)   'high-usage' indicator
UserInput down(10)'low-usage' indicator


Progress So Far:
-------

1. First thing is to setup our project and start writing tests for our first for our first spec.
2. We implemented the construtor that starts the temp at 20.
3. We then write the test for the up function.

Tests written so far: 3
Test coverage: 100%

Installation:
-------

### Program installation

1. Fork/Clone this repository.
2. R

### How to run tests

1. Fork/Clone this repository.
2. Run bundle install in your terminal
3. Then run rspec to see tests.


Challenge:
-------

As usual please start by forking this repo.

We are going to write a small Twitter clone that will allow the users to post messages to a public stream.

Features:
-------

```
STRAIGHT UP

As a Maker
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a maker
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a Maker
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a Maker
So that I can post messages on Chitter as me
I want to sign up for Chitter

HARDER

As a Maker
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a Maker
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter

ADVANCED

As a Maker
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep
```

Technical Approach:
-----

This week you integrated a database into Bookmark Manager using the `PG` gem and `SQL` queries. You can continue to use this approach when building Chitter Challenge.

If you'd like more technical challenge this weekend, try using an [Object Relational Mapper](https://en.wikipedia.org/wiki/Object-relational_mapping) as the database interface.

Some useful resources:
**DataMapper**
- [DataMapper ORM](https://datamapper.org/)
- [Sinatra, PostgreSQL & DataMapper recipe](http://recipes.sinatrarb.com/p/databases/postgresql-datamapper)

**ActiveRecord**
- [ActiveRecord ORM](https://guides.rubyonrails.org/active_record_basics.html)
- [Sinatra, PostgreSQL & ActiveRecord recipe](http://recipes.sinatrarb.com/p/databases/postgresql-activerecord?#article)


