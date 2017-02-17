## Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name      | string    | not null


##categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | text      | not null

## group_categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
group_id     | integer   | not null, foreign key (references group)
category_id    | integer   | not null, foreign key (references category)


## huddles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | integer   | not null
group_id    | integer   | not null, foreign key (references group), only has one
description | text      | not null
date        | datetime  | not null

## user_groups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user)
group_id    | integer   | not null, foreign key (references group)

## user_huddles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user)
huddle_id    | integer   | not null, foreign key (references huddle)

## React Routes
route       | component
------------|----------
/           | App
/signup     | SessionForm
/login      | SessionForm
/user       | UserIndex > RSVPIndex
/groups     | GroupIndex
/categories | CategoryIndex
