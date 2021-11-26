-- our create stmt
CREATE TABLE lineups (
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title varchar(100) NOT NULL,
    description varchar(1024) NOT NULL,
    picture varchar(255) NOT NULL,
    video varchar(255) NOT NULL,
    map varchar(25) NOT NULL,
    agent varhcar(25),
    location varchar(25),
    attack int,
    stage varchar(10),
    utility_or_wallbang int,
    utility_type varchar(15),
    ability varchar(20) NOT NULL
);

-- INSERT INTO lineups (
--     title, description, picture, 
--     video, map, attack, stage, 
--     utility_or_wallbang, utility_type)
-- VALUES (
--     '', -- title
--     '', -- description
--     '', -- picture
--     '', -- video
--     '', -- map
--     '', -- agent
--     0, -- attack
--     '', -- stage
--     0, -- utiltiy or wallbang
--     '' -- utility type
--     'recon dart' -- ability
-- )

INSERT INTO lineups (
    title, description, picture, 
    video, map, location, agent, attack, stage, 
    utility_or_wallbang, utility_type, ability)
VALUES (
    'Sova recon dart for backsite a', -- title
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', -- description
    'https://www.pcgamesn.com/wp-content/uploads/2020/04/sova-bind-a-attack-1.jpg', -- picture
    'https://www.youtube.com/embed/inN4yM2ftUs', -- video
    'bind', -- map
    'a site', -- location
    'sova', -- agent
    0, -- attack
    'early-round', -- stage
    0, -- utiltiy or wallbang
    'information', -- utility type
    'recon-dart' -- ability
);

INSERT INTO lineups (
    title, description, picture, 
    video, map, location, agent, attack, stage, 
    utility_or_wallbang, utility_type, ability)
VALUES (
    'Sova shock dart for hooka', -- title
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', -- description
    'https://www.pcgamesn.com/wp-content/uploads/2020/04/sova-bind-a-attack-1.jpg', -- picture
    'https://www.youtube.com/embed/inN4yM2ftUs', -- video
    'bind', -- map
    'b site', -- location
    'sova', -- agent
    0, -- attack
    'mid-round', -- stage
    0, -- utiltiy or wallbang
    'damage-dealing', -- utility type
    'shock-dart' -- ability
);