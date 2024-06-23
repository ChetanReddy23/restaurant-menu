CREATE TABLE `Menu` (
  `id` BIGINT,
  `title` VARCHAR(1024),
  `category` VARCHAR(1024),
  `price` BIGINT,
  `img` VARCHAR(1024),
  `desc` VARCHAR(1024)
);

INSERT INTO `Menu` (`id`,`title`,`category`,`price`,`img`,`desc`) VALUES
(1,'Panner tika','starters',200,'th.jpeg','delicious tandoori snack made with Panner'),
(2,'Chicken 65','starters',250,'c65.jpeg','Spicy Chicken tossed snack'),
(3,'Butter Chicken','starters',250,'bc.jpeg','delicious smoky chicken with sweet and spice gravy'),
(4,'Dal fry','starters',120,'df.jpeg','dal fried gravy  '),
(5,'Chicken Biryani','Biryanis',250,'cb.jpeg','Spicy flavoured rice with juicy chicken'),
(6,'Panner Biryani','Biryanis',220,'pb.jpeg','delicious flavoured rice with panner'),
(7,'Mixed Veg Biryani','Biryanis',180,'vb.jpeg','delicious flavoured rice with veggies'),
(8,'Jeera Rice','Biryanis',100,'jr.jpeg','delicious jeera rice'),
(9,'Rumali Roti','Rotis',20,'rm.jpeg','delicious rumali roti'),
(10,'Butter naan','Rotis',30,'bn.jpeg','delicious butter naan'),
(11,'Double ka meetha','Deserts',50,'dm.jpeg','delicious and sweet'),
(12,'Aricot Delight','Deserts',100,'ad.jpeg','delicious and sweet');
