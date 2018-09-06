const uuid = require('uuid/v4')

module.exports = [
  {
    id: uuid(),
    facilityNum: 'acker1227',
    facilityName: 'Ackerman Campground',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-122.7716667, 40.7855556]
    },
    hasAmps: false,
    petsAllowed: true,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 25,
    reviews: [
      {
        name: 'Teddi Eastman',
        email: 'teddieastman@gmail.com',
        date: '07/02/2018',
        location: 'Cottonwood, CA',
        review: `This Campground is great for views and spacious sites. Even though there are some sites that are right next to each other it seems to be room enough to fit all of your camping needs. There is no running water which is the only reason why I would not give this a 5-star rating. The water between Lake Lewiston and Trinity Lake is extremely cold and I would not recommend swimming in it unless you are a polar bear. Despite not having running water, they do have flushing toilets which is nice. There is not much access to the water on that campsite,  and not a lot of shore fishing available at the campsite itself. But you can drive a little ways and fish Lewiston lake or Trinity Lake either way is not very far from the campsite.`,
        rating: '4'
      },
      {
        name: 'Jamee Cocheran',
        email: 'jameecocheran@gmail.com',
        date: '12/20/2018',
        location: 'Fortuna, CA',
        review: `We went camping in July here and I paid for three days of use ($60). We ended up only staying one night due to the place being just short of infested with wasps, incredibly hard ground, poor lake access and the hum from the power plant droning all night. It was our only chance to vacation during the entire year. The only upside I suppose was that there was no one else there so we had privacy?`,
        rating: '2'
      },
      {
        name: 'Jim Gill',
        email: 'jimgill@gmail.com',
        date: '01/09/2018',
        location: 'Freestone, CA',
        review: `We stayed one week in late September / early October 2016.  There are about 50 sites, and only perhaps 5 were occupied.   We could not see our neighbors in either direction.
        The layout follows the edge of Lewiston Lake.  The sites are large.  Easy access to the shoreline for fishing.
        We went for the dark skies.  Great star gazing with very little influence from nearby towns or Redding to the East.  We spoke to the camphost, "Lana".  She was very nice.  If you want a quiet get-away, this is a good place for that.
        The county road runs right by the campsites, so don't be surprised that you are not isolated from traffic.`,
        rating: '1'
      }
    ],
    amenities: [
      'birding', 'boating', 'campfire', 'fishing', 'hiking'
    ],
    facilityPhotos: [
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1431450805/campground-photos/qxdssuny6hsor02lffdg.jpg',
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1460996684/campground-photos/bqzoicevesyxq8oyss33.jpg',
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1470514185/campground-photos/d5o0v9ubj91ocyjik9gr.jpg',
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1431451197/campground-photos/xj1kdx298umaibou4b8e.jpg',
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1467861954/campground-photos/kez4uwvvoqgfzxackfw4.jpg'
    ]
  },
  {
    id: uuid(),
    facilityNum: 'leoca3404',
    facilityName: 'Leo Carrillo SP',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-118.9582045, 34.0445491]
    },
    hasAmps: false,
    petsAllowed: true,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 45,
    reviews: [
      {
        name: 'Cary Saltzman',
        email: 'carysaltzman@gmail.com',
        date: '09/03/2018',
        location: 'Los Angeles, CA',
        review: `Great place to relax, take your family and your pup! Beautiful views of the ocean! The beach has many access points so it his hard to find the dog beach. This is located between lifeguard stations 3 and 5. I suggest going through the actual park entrance and paying the $12 fee so beautiful places like this say clean, people have jobs and the park gets updated. It is also easier if your like me and love to set up camp for the day because the parking lot is right on the beach :) If you do not have the money, no worries just park on PCH. Swimming was a bit challenging here the day we went. There is a massive layer of small sized rocks that are being pushed about when the waves come in. If you like a rough sloughing then this is for you! We have not camped there yet but did visit the grounds. After a long summer and tons of tourist, the campground look clean to me. There are little nooks if you want to be more secluded or a middle area if you want to be more social. They have showers, flush toilets, electric and the guard at the entrance was very informative and charming at the same time!`,
        rating: '5'
      },
      {
        name: 'Jennifer Detman',
        email: 'jenniferdetman@gmail.com',
        date: '08/20/2018',
        location: 'Bellingham, WA',
        review: `If I'm not mistaken, this is one of a few beaches in the greater LA area where dogs are allowed. Dogs must be on leashes at all times. We brought our dog, and he had a blast!
        Pros: + Dogs are allowed as long as they are on leashes + The beach is mostly sandy + There are bathrooms and showers
        + Parking is easy and the rates are reasonable: $3 per hour or $12 for the day
        Cons: - The bathrooms are not very clean. The toilets are made of stainless, and there are no toilet seats (or fused with the toilets)!
        We will definitely come back!`,
        rating: '4'
      },
      {
        name: 'Andrew Jackson',
        email: 'andrewjackson@gmail.com',
        date: '09/05/2018',
        location: 'Lancaster, CA',
        review: `Got tent set up finally around 8 pm and couldn't wait to get some firewood to relax cook hot dogs and roast marshmallows but apparently that was a really unheard of thing to do along with inconvenient for the camp host to have to get up out of his chair to sell it to me (it was next to him) very rude very disrespectful and hateful behavior never met camp host so sour and hateful with his mad face sneering lip he grumbled about it being too late (8pm) to buy it yet begrudgingly got his f#t a$$ up to get up out of his chair to take my money. That pretty much took the fun out of my evening. I don't like being treated with disrespect when I pay hard earned money for a relaxing pleasant time camping at the beach. What happened Leo Carrillo ?! You need to review your code of conduct toward paying guests with mandated don't be an a whole to campers wanting to buy wood - guess he thinks he's entitled to be rude as he sleeps there so must love acting so superior and
        Condescending. Here's my middle finger hope you get replaced this is Southern California it's where people go to relax and hopefully have a great time - thanks
        For the memory oh greatest most honorable mad faced cranky chair sitting it's my purpose to assist as campers camp host but I really hate when people bother me while I'm sitting next to my firewood for sale pile of wood. He didn't refuse to sell it he just made you wish he was somebody suited for the position he was assigned to be there for WHAT IS UP WITH ENTITLED STATE PARK VOLUNTEERS OR  EMPLOYEES?? And since when do camp hosts act so despicable. Wow someone's not
        Monitoring the help.`,
        rating: '1'
      }
    ],
    amenities: [
      'birding', 'boating', 'campfire', 'fishing', 'hiking', 'surfing'
    ],
    facilityPhotos: [
      'https://i.ytimg.com/vi/R0A7WDkiHDM/maxresdefault.jpg',
      'https://i.imgur.com/J9ZrKjx.jpg',
      'https://i.ytimg.com/vi/Bz4mnAQY1kg/maxresdefault.jpg',
      'https://orig15.deviantart.net/c4d0/f/2012/085/c/2/redmill_rapid_by_kg4wih-d4tycsa.jpg',
      'https://i.ytimg.com/vi/-OreZ4kqPZE/maxresdefault.jpg'
    ]
  },
  {
    id: uuid(),
    facilityNum: 'bucke3660',
    facilityName: 'Buckeye Flat',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-118.7240982, 36.6057098]
    },
    hasAmps: false,
    petsAllowed: false,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 35,
    reviews: [
      {
        name: 'Andrew Jackson',
        email: 'andrewjackson@gmail.com',
        date: '09/05/2018',
        location: 'Lancaster, CA',
        review: `Got tent set up finally around 8 pm and couldn't wait to get some firewood to relax cook hot dogs and roast marshmallows but apparently that was a really unheard of thing to do along with inconvenient for the camp host to have to get up out of his chair to sell it to me (it was next to him) very rude very disrespectful and hateful behavior never met camp host so sour and hateful with his mad face sneering lip he grumbled about it being too late (8pm) to buy it yet begrudgingly got his f#t a$$ up to get up out of his chair to take my money. That pretty much took the fun out of my evening. I don't like being treated with disrespect when I pay hard earned money for a relaxing pleasant time camping at the beach. What happened Leo Carrillo ?! You need to review your code of conduct toward paying guests with mandated don't be an a whole to campers wanting to buy wood - guess he thinks he's entitled to be rude as he sleeps there so must love acting so superior and
        Condescending. Here's my middle finger hope you get replaced this is Southern California it's where people go to relax and hopefully have a great time - thanks
        For the memory oh greatest most honorable mad faced cranky chair sitting it's my purpose to assist as campers camp host but I really hate when people bother me while I'm sitting next to my firewood for sale pile of wood. He didn't refuse to sell it he just made you wish he was somebody suited for the position he was assigned to be there for WHAT IS UP WITH ENTITLED STATE PARK VOLUNTEERS OR  EMPLOYEES?? And since when do camp hosts act so despicable. Wow someone's not
        Monitoring the help.`,
        rating: '1'
      },
      {
        name: 'Jim Gill',
        email: 'jimgill@gmail.com',
        date: '01/09/2018',
        location: 'Freestone, CA',
        review: `We stayed one week in late September / early October 2016.  There are about 50 sites, and only perhaps 5 were occupied.   We could not see our neighbors in either direction.
        The layout follows the edge of Lewiston Lake.  The sites are large.  Easy access to the shoreline for fishing.
        We went for the dark skies.  Great star gazing with very little influence from nearby towns or Redding to the East.  We spoke to the camphost, "Lana".  She was very nice.  If you want a quiet get-away, this is a good place for that.
        The county road runs right by the campsites, so don't be surprised that you are not isolated from traffic.`,
        rating: '2'
      },
      {
        name: 'Teddi Eastman',
        email: 'teddieastman@gmail.com',
        date: '07/02/2018',
        location: 'Cottonwood, CA',
        review: `This Campground is great for views and spacious sites. Even though there are some sites that are right next to each other it seems to be room enough to fit all of your camping needs. There is no running water which is the only reason why I would not give this a 5-star rating. The water between Lake Lewiston and Trinity Lake is extremely cold and I would not recommend swimming in it unless you are a polar bear. Despite not having running water, they do have flushing toilets which is nice. There is not much access to the water on that campsite,  and not a lot of shore fishing available at the campsite itself. But you can drive a little ways and fish Lewiston lake or Trinity Lake either way is not very far from the campsite.`,
        rating: '4'
      }
    ],
    amenities: [
      'camping', 'fishing', 'hiking', 'kayaking', 'swimming', 'relaxing'
    ],
    facilityPhotos: [
      'https://www.nps.gov/npgallery/GetAsset/F0BE3097-1DD8-B71B-0B91986836B23C59/proxy/hires/',
      'https://www.nps.gov/npgallery/GetAsset/F0D45019-1DD8-B71B-0B4CF1CB266FE140/proxy/hires/',
      'https://www.nps.gov/npgallery/GetAsset/F0AEC54F-1DD8-B71B-0B1ECDA29309C1E5/proxy/hires/',
      'https://www.nps.gov/npgallery/GetAsset/F0E29A0D-1DD8-B71B-0B9357D6CB3760A7/proxy/hires/'
    ]
  },
  {
    id: uuid(),
    facilityNum: 'andre3628',
    facilityName: 'Andrew Molera SP',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-121.844272, 36.2884189]
    },
    hasAmps: false,
    petsAllowed: true,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 45,
    reviews: [
      {
        name: 'Cary Saltzman',
        email: 'carysaltzman@gmail.com',
        date: '09/03/2018',
        location: 'Los Angeles, CA',
        review: `Great place to relax, take your family and your pup! Beautiful views of the ocean! The beach has many access points so it his hard to find the dog beach. This is located between lifeguard stations 3 and 5. I suggest going through the actual park entrance and paying the $12 fee so beautiful places like this say clean, people have jobs and the park gets updated. It is also easier if your like me and love to set up camp for the day because the parking lot is right on the beach :) If you do not have the money, no worries just park on PCH. Swimming was a bit challenging here the day we went. There is a massive layer of small sized rocks that are being pushed about when the waves come in. If you like a rough sloughing then this is for you! We have not camped there yet but did visit the grounds. After a long summer and tons of tourist, the campground look clean to me. There are little nooks if you want to be more secluded or a middle area if you want to be more social. They have showers, flush toilets, electric and the guard at the entrance was very informative and charming at the same time!`,
        rating: '5'
      },
      {
        name: 'Jennifer Detman',
        email: 'jenniferdetman@gmail.com',
        date: '08/20/2018',
        location: 'Bellingham, WA',
        review: `If I'm not mistaken, this is one of a few beaches in the greater LA area where dogs are allowed. Dogs must be on leashes at all times. We brought our dog, and he had a blast!
        Pros: + Dogs are allowed as long as they are on leashes + The beach is mostly sandy + There are bathrooms and showers
        + Parking is easy and the rates are reasonable: $3 per hour or $12 for the day
        Cons: - The bathrooms are not very clean. The toilets are made of stainless, and there are no toilet seats (or fused with the toilets)!
        We will definitely come back!`,
        rating: '4'
      },
      {
        name: 'Andrew Jackson',
        email: 'andrewjackson@gmail.com',
        date: '09/05/2018',
        location: 'Lancaster, CA',
        review: `Got tent set up finally around 8 pm and couldn't wait to get some firewood to relax cook hot dogs and roast marshmallows but apparently that was a really unheard of thing to do along with inconvenient for the camp host to have to get up out of his chair to sell it to me (it was next to him) very rude very disrespectful and hateful behavior never met camp host so sour and hateful with his mad face sneering lip he grumbled about it being too late (8pm) to buy it yet begrudgingly got his f#t a$$ up to get up out of his chair to take my money. That pretty much took the fun out of my evening. I don't like being treated with disrespect when I pay hard earned money for a relaxing pleasant time camping at the beach. What happened Leo Carrillo ?! You need to review your code of conduct toward paying guests with mandated don't be an a whole to campers wanting to buy wood - guess he thinks he's entitled to be rude as he sleeps there so must love acting so superior and
        Condescending. Here's my middle finger hope you get replaced this is Southern California it's where people go to relax and hopefully have a great time - thanks
        For the memory oh greatest most honorable mad faced cranky chair sitting it's my purpose to assist as campers camp host but I really hate when people bother me while I'm sitting next to my firewood for sale pile of wood. He didn't refuse to sell it he just made you wish he was somebody suited for the position he was assigned to be there for WHAT IS UP WITH ENTITLED STATE PARK VOLUNTEERS OR  EMPLOYEES?? And since when do camp hosts act so despicable. Wow someone's not
        Monitoring the help.`,
        rating: '1'
      }
    ],
    amenities: [
      'birding', 'boating', 'campfire', 'fishing', 'hiking', 'surfing'
    ],
    facilityPhotos: [
      'https://s3-media3.fl.yelpcdn.com/bphoto/_O3CDKAFoeXv67UNwuxVFg/o.jpg',
      'https://s3-media3.fl.yelpcdn.com/bphoto/Vt9tMlVH1QredcLGMruqFw/o.jpg',
      'https://s3-media4.fl.yelpcdn.com/bphoto/5ly9ODh3HZliTuasuYDC_g/o.jpg',
      'https://s3-media3.fl.yelpcdn.com/bphoto/Im6FDwOSIeinBLW5LRrwWg/o.jpg',
      'https://s3-media2.fl.yelpcdn.com/bphoto/jPT_XO5AVqlHorYMDyVsMw/o.jpg'
    ]
  },
  {
    id: uuid(),
    facilityNum: 'kirby3782',
    facilityName: 'Kirby Cove Campground',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-122.490737, 37.8288241]
    },
    hasAmps: false,
    petsAllowed: true,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 50,
    reviews: [
      {
        name: 'Cary Saltzman',
        email: 'carysaltzman@gmail.com',
        date: '09/03/2018',
        location: 'Los Angeles, CA',
        review: `Great place to relax, take your family and your pup! Beautiful views of the ocean! The beach has many access points so it his hard to find the dog beach. This is located between lifeguard stations 3 and 5. I suggest going through the actual park entrance and paying the $12 fee so beautiful places like this say clean, people have jobs and the park gets updated. It is also easier if your like me and love to set up camp for the day because the parking lot is right on the beach :) If you do not have the money, no worries just park on PCH. Swimming was a bit challenging here the day we went. There is a massive layer of small sized rocks that are being pushed about when the waves come in. If you like a rough sloughing then this is for you! We have not camped there yet but did visit the grounds. After a long summer and tons of tourist, the campground look clean to me. There are little nooks if you want to be more secluded or a middle area if you want to be more social. They have showers, flush toilets, electric and the guard at the entrance was very informative and charming at the same time!`,
        rating: '5'
      },
      {
        name: 'Jennifer Detman',
        email: 'jenniferdetman@gmail.com',
        date: '08/20/2018',
        location: 'Bellingham, WA',
        review: `If I'm not mistaken, this is one of a few beaches in the greater LA area where dogs are allowed. Dogs must be on leashes at all times. We brought our dog, and he had a blast!
        Pros: + Dogs are allowed as long as they are on leashes + The beach is mostly sandy + There are bathrooms and showers
        + Parking is easy and the rates are reasonable: $3 per hour or $12 for the day
        Cons: - The bathrooms are not very clean. The toilets are made of stainless, and there are no toilet seats (or fused with the toilets)!
        We will definitely come back!`,
        rating: '4'
      },
      {
        name: 'Andrew Jackson',
        email: 'andrewjackson@gmail.com',
        date: '09/05/2018',
        location: 'Lancaster, CA',
        review: `Got tent set up finally around 8 pm and couldn't wait to get some firewood to relax cook hot dogs and roast marshmallows but apparently that was a really unheard of thing to do along with inconvenient for the camp host to have to get up out of his chair to sell it to me (it was next to him) very rude very disrespectful and hateful behavior never met camp host so sour and hateful with his mad face sneering lip he grumbled about it being too late (8pm) to buy it yet begrudgingly got his f#t a$$ up to get up out of his chair to take my money. That pretty much took the fun out of my evening. I don't like being treated with disrespect when I pay hard earned money for a relaxing pleasant time camping at the beach. What happened Leo Carrillo ?! You need to review your code of conduct toward paying guests with mandated don't be an a whole to campers wanting to buy wood - guess he thinks he's entitled to be rude as he sleeps there so must love acting so superior and
        Condescending. Here's my middle finger hope you get replaced this is Southern California it's where people go to relax and hopefully have a great time - thanks
        For the memory oh greatest most honorable mad faced cranky chair sitting it's my purpose to assist as campers camp host but I really hate when people bother me while I'm sitting next to my firewood for sale pile of wood. He didn't refuse to sell it he just made you wish he was somebody suited for the position he was assigned to be there for WHAT IS UP WITH ENTITLED STATE PARK VOLUNTEERS OR  EMPLOYEES?? And since when do camp hosts act so despicable. Wow someone's not
        Monitoring the help.`,
        rating: '1'
      }
    ],
    amenities: [
      'birding', 'boating', 'campfire', 'fishing', 'hiking', 'surfing', 'kayaking'
    ],
    facilityPhotos: [
      'https://i.ytimg.com/vi/0PWyzof6eko/maxresdefault.jpg',
      'https://i.ytimg.com/vi/-GJbC2qBaXU/maxresdefault.jpg',
      'https://www.kcet.org/sites/kl/files/thumbnails/image/largercamps.jpg',
      'https://www.kcet.org/sites/kl/files/thumbnails/image/samuelptaylor.jpg',
      'https://i.pinimg.com/originals/fc/b0/0f/fcb00f0b7b13becbf4d2251143928a4e.jpg'
    ]
  },
  {
    id: uuid(),
    facilityNum: 'moroc3356',
    facilityName: 'Moro Campground',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-117.8223284, 33.5629262]
    },
    hasAmps: false,
    petsAllowed: true,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 70,
    reviews: [
      {
        name: 'Cary Saltzman',
        email: 'carysaltzman@gmail.com',
        date: '09/03/2018',
        location: 'Los Angeles, CA',
        review: `Great place to relax, take your family and your pup! Beautiful views of the ocean! The beach has many access points so it his hard to find the dog beach. This is located between lifeguard stations 3 and 5. I suggest going through the actual park entrance and paying the $12 fee so beautiful places like this say clean, people have jobs and the park gets updated. It is also easier if your like me and love to set up camp for the day because the parking lot is right on the beach :) If you do not have the money, no worries just park on PCH. Swimming was a bit challenging here the day we went. There is a massive layer of small sized rocks that are being pushed about when the waves come in. If you like a rough sloughing then this is for you! We have not camped there yet but did visit the grounds. After a long summer and tons of tourist, the campground look clean to me. There are little nooks if you want to be more secluded or a middle area if you want to be more social. They have showers, flush toilets, electric and the guard at the entrance was very informative and charming at the same time!`,
        rating: '5'
      },
      {
        name: 'Jennifer Detman',
        email: 'jenniferdetman@gmail.com',
        date: '08/20/2018',
        location: 'Bellingham, WA',
        review: `If I'm not mistaken, this is one of a few beaches in the greater LA area where dogs are allowed. Dogs must be on leashes at all times. We brought our dog, and he had a blast!
        Pros: + Dogs are allowed as long as they are on leashes + The beach is mostly sandy + There are bathrooms and showers
        + Parking is easy and the rates are reasonable: $3 per hour or $12 for the day
        Cons: - The bathrooms are not very clean. The toilets are made of stainless, and there are no toilet seats (or fused with the toilets)!
        We will definitely come back!`,
        rating: '4'
      },
      {
        name: 'Andrew Jackson',
        email: 'andrewjackson@gmail.com',
        date: '09/05/2018',
        location: 'Lancaster, CA',
        review: `Got tent set up finally around 8 pm and couldn't wait to get some firewood to relax cook hot dogs and roast marshmallows but apparently that was a really unheard of thing to do along with inconvenient for the camp host to have to get up out of his chair to sell it to me (it was next to him) very rude very disrespectful and hateful behavior never met camp host so sour and hateful with his mad face sneering lip he grumbled about it being too late (8pm) to buy it yet begrudgingly got his f#t a$$ up to get up out of his chair to take my money. That pretty much took the fun out of my evening. I don't like being treated with disrespect when I pay hard earned money for a relaxing pleasant time camping at the beach. What happened Leo Carrillo ?! You need to review your code of conduct toward paying guests with mandated don't be an a whole to campers wanting to buy wood - guess he thinks he's entitled to be rude as he sleeps there so must love acting so superior and
        Condescending. Here's my middle finger hope you get replaced this is Southern California it's where people go to relax and hopefully have a great time - thanks
        For the memory oh greatest most honorable mad faced cranky chair sitting it's my purpose to assist as campers camp host but I really hate when people bother me while I'm sitting next to my firewood for sale pile of wood. He didn't refuse to sell it he just made you wish he was somebody suited for the position he was assigned to be there for WHAT IS UP WITH ENTITLED STATE PARK VOLUNTEERS OR  EMPLOYEES?? And since when do camp hosts act so despicable. Wow someone's not
        Monitoring the help.`,
        rating: '1'
      }
    ],
    amenities: [
      'birding', 'boating', 'campfire', 'fishing', 'hiking', 'surfing', 'kayaking'
    ],
    facilityPhotos: [
      'https://bcsecure01-a.akamaihd.net/24/1138497952/201802/2715/1138497952_5730185614001_5730170009001-vs.jpg?pubId=1138497952&videoId=5730170009001',
      'https://i.ytimg.com/vi/sUQ7qKxaTdk/maxresdefault.jpg',
      'https://i.ytimg.com/vi/M4gAtrLX7Y8/maxresdefault.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Prairie_Creek_Redwoods_State_Park.jpg',
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/4Ykzv3Fqxikmw1fjl/young-couple-hiking-at-crystal-cove-state-park-newport-beach-ca_hfheokt__F0001.png'
    ]
  },
  {
    id: uuid(),
    facilityNum: 'jumbo3399',
    facilityName: 'Jumbo Rocks',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-116.0623802, 33.9919309]
    },
    hasAmps: false,
    petsAllowed: true,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 25,
    reviews: [
      {
        name: 'Cary Saltzman',
        email: 'carysaltzman@gmail.com',
        date: '09/03/2018',
        location: 'Los Angeles, CA',
        review: `Great place to relax, take your family and your pup! Beautiful views of the ocean! The beach has many access points so it his hard to find the dog beach. This is located between lifeguard stations 3 and 5. I suggest going through the actual park entrance and paying the $12 fee so beautiful places like this say clean, people have jobs and the park gets updated. It is also easier if your like me and love to set up camp for the day because the parking lot is right on the beach :) If you do not have the money, no worries just park on PCH. Swimming was a bit challenging here the day we went. There is a massive layer of small sized rocks that are being pushed about when the waves come in. If you like a rough sloughing then this is for you! We have not camped there yet but did visit the grounds. After a long summer and tons of tourist, the campground look clean to me. There are little nooks if you want to be more secluded or a middle area if you want to be more social. They have showers, flush toilets, electric and the guard at the entrance was very informative and charming at the same time!`,
        rating: '5'
      },
      {
        name: 'Jennifer Detman',
        email: 'jenniferdetman@gmail.com',
        date: '08/20/2018',
        location: 'Bellingham, WA',
        review: `If I'm not mistaken, this is one of a few beaches in the greater LA area where dogs are allowed. Dogs must be on leashes at all times. We brought our dog, and he had a blast!
        Pros: + Dogs are allowed as long as they are on leashes + The beach is mostly sandy + There are bathrooms and showers
        + Parking is easy and the rates are reasonable: $3 per hour or $12 for the day
        Cons: - The bathrooms are not very clean. The toilets are made of stainless, and there are no toilet seats (or fused with the toilets)!
        We will definitely come back!`,
        rating: '4'
      },
      {
        name: 'Andrew Jackson',
        email: 'andrewjackson@gmail.com',
        date: '09/05/2018',
        location: 'Lancaster, CA',
        review: `Got tent set up finally around 8 pm and couldn't wait to get some firewood to relax cook hot dogs and roast marshmallows but apparently that was a really unheard of thing to do along with inconvenient for the camp host to have to get up out of his chair to sell it to me (it was next to him) very rude very disrespectful and hateful behavior never met camp host so sour and hateful with his mad face sneering lip he grumbled about it being too late (8pm) to buy it yet begrudgingly got his f#t a$$ up to get up out of his chair to take my money. That pretty much took the fun out of my evening. I don't like being treated with disrespect when I pay hard earned money for a relaxing pleasant time camping at the beach. What happened Leo Carrillo ?! You need to review your code of conduct toward paying guests with mandated don't be an a whole to campers wanting to buy wood - guess he thinks he's entitled to be rude as he sleeps there so must love acting so superior and
        Condescending. Here's my middle finger hope you get replaced this is Southern California it's where people go to relax and hopefully have a great time - thanks
        For the memory oh greatest most honorable mad faced cranky chair sitting it's my purpose to assist as campers camp host but I really hate when people bother me while I'm sitting next to my firewood for sale pile of wood. He didn't refuse to sell it he just made you wish he was somebody suited for the position he was assigned to be there for WHAT IS UP WITH ENTITLED STATE PARK VOLUNTEERS OR  EMPLOYEES?? And since when do camp hosts act so despicable. Wow someone's not
        Monitoring the help.`,
        rating: '1'
      }
    ],
    amenities: [
      'birding', 'campfire', 'hiking', 'boldering', 'rock climbing'
    ],
    facilityPhotos: [
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1469053009/campground-photos/nnoeqd8uzax0zedneday.jpg',
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1513995876/campground-photos/qr9pbivno0rhitatvwrc.jpg',
      'https://diimension.com/images/2018/04/joshua-tree-national-park-rokcs-beautiful-drone-footage-flying-up-and-over-red-rock-formations-in-joshua-of-joshua-tree-national-park-rokcs.png',
      'https://diimension.com/images/2018/04/joshua-tree-national-park-rokcs-beautiful-trees-and-rocks-at-joshua-tree-national-park-in-california-stock-of-joshua-tree-national-park-rokcs.png',
      'https://i.ytimg.com/vi/SAx929S3YgU/maxresdefault.jpg'
    ]
  },
  {
    id: uuid(),
    facilityNum: 'pigeo4076',
    facilityName: 'Pigeon Point Campground',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-123.1302704, 40.76705358]
    },
    hasAmps: false,
    petsAllowed: false,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 15,
    reviews: [
      {
        name: 'Cary Saltzman',
        email: 'carysaltzman@gmail.com',
        date: '09/03/2018',
        location: 'Los Angeles, CA',
        review: `Great place to relax, take your family and your pup! Beautiful views of the ocean! The beach has many access points so it his hard to find the dog beach. This is located between lifeguard stations 3 and 5. I suggest going through the actual park entrance and paying the $12 fee so beautiful places like this say clean, people have jobs and the park gets updated. It is also easier if your like me and love to set up camp for the day because the parking lot is right on the beach :) If you do not have the money, no worries just park on PCH. Swimming was a bit challenging here the day we went. There is a massive layer of small sized rocks that are being pushed about when the waves come in. If you like a rough sloughing then this is for you! We have not camped there yet but did visit the grounds. After a long summer and tons of tourist, the campground look clean to me. There are little nooks if you want to be more secluded or a middle area if you want to be more social. They have showers, flush toilets, electric and the guard at the entrance was very informative and charming at the same time!`,
        rating: '5'
      },
      {
        name: 'Jennifer Detman',
        email: 'jenniferdetman@gmail.com',
        date: '08/20/2018',
        location: 'Bellingham, WA',
        review: `If I'm not mistaken, this is one of a few beaches in the greater LA area where dogs are allowed. Dogs must be on leashes at all times. We brought our dog, and he had a blast!
        Pros: + Dogs are allowed as long as they are on leashes + The beach is mostly sandy + There are bathrooms and showers
        + Parking is easy and the rates are reasonable: $3 per hour or $12 for the day
        Cons: - The bathrooms are not very clean. The toilets are made of stainless, and there are no toilet seats (or fused with the toilets)!
        We will definitely come back!`,
        rating: '4'
      },
      {
        name: 'Andrew Jackson',
        email: 'andrewjackson@gmail.com',
        date: '09/05/2018',
        location: 'Lancaster, CA',
        review: `Got tent set up finally around 8 pm and couldn't wait to get some firewood to relax cook hot dogs and roast marshmallows but apparently that was a really unheard of thing to do along with inconvenient for the camp host to have to get up out of his chair to sell it to me (it was next to him) very rude very disrespectful and hateful behavior never met camp host so sour and hateful with his mad face sneering lip he grumbled about it being too late (8pm) to buy it yet begrudgingly got his f#t a$$ up to get up out of his chair to take my money. That pretty much took the fun out of my evening. I don't like being treated with disrespect when I pay hard earned money for a relaxing pleasant time camping at the beach. What happened Leo Carrillo ?! You need to review your code of conduct toward paying guests with mandated don't be an a whole to campers wanting to buy wood - guess he thinks he's entitled to be rude as he sleeps there so must love acting so superior and
        Condescending. Here's my middle finger hope you get replaced this is Southern California it's where people go to relax and hopefully have a great time - thanks
        For the memory oh greatest most honorable mad faced cranky chair sitting it's my purpose to assist as campers camp host but I really hate when people bother me while I'm sitting next to my firewood for sale pile of wood. He didn't refuse to sell it he just made you wish he was somebody suited for the position he was assigned to be there for WHAT IS UP WITH ENTITLED STATE PARK VOLUNTEERS OR  EMPLOYEES?? And since when do camp hosts act so despicable. Wow someone's not
        Monitoring the help.`,
        rating: '1'
      }
    ],
    amenities: [
      'birding', 'boating', 'campfire', 'fishing', 'hiking', 'kayaking', 'swimming'
    ],
    facilityPhotos: [
      'https://i.ytimg.com/vi/5gry0kKFwm0/maxresdefault.jpg',
      'https://ltbackpackers.files.wordpress.com/2012/08/emerald-sapphire-lake-backpack-trip-fig200.jpg',
      'https://i.pinimg.com/originals/55/a7/d7/55a7d7ed3a6df92e6a54fd8ea5af1c6c.jpg',
      'https://activenorcal.net/downloads/2280/download/IMG_9332.jpg?cb=a6697f569ac945925b16bbe03dba5aa1&w=-1',
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1505848511/campground-photos/fjx2akqohrc3u4hila4s.jpg'
    ]
  },
  {
    id: uuid(),
    facilityNum: 'north3774',
    facilityName: 'North Pines Campground',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-119.5655556, 37.7419444]
    },
    hasAmps: false,
    petsAllowed: true,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 35,
    reviews: [
      {
        name: 'Cary Saltzman',
        email: 'carysaltzman@gmail.com',
        date: '09/03/2018',
        location: 'Los Angeles, CA',
        review: `Great place to relax, take your family and your pup! Beautiful views of the ocean! The beach has many access points so it his hard to find the dog beach. This is located between lifeguard stations 3 and 5. I suggest going through the actual park entrance and paying the $12 fee so beautiful places like this say clean, people have jobs and the park gets updated. It is also easier if your like me and love to set up camp for the day because the parking lot is right on the beach :) If you do not have the money, no worries just park on PCH. Swimming was a bit challenging here the day we went. There is a massive layer of small sized rocks that are being pushed about when the waves come in. If you like a rough sloughing then this is for you! We have not camped there yet but did visit the grounds. After a long summer and tons of tourist, the campground look clean to me. There are little nooks if you want to be more secluded or a middle area if you want to be more social. They have showers, flush toilets, electric and the guard at the entrance was very informative and charming at the same time!`,
        rating: '5'
      },
      {
        name: 'Jennifer Detman',
        email: 'jenniferdetman@gmail.com',
        date: '08/20/2018',
        location: 'Bellingham, WA',
        review: `If I'm not mistaken, this is one of a few beaches in the greater LA area where dogs are allowed. Dogs must be on leashes at all times. We brought our dog, and he had a blast!
        Pros: + Dogs are allowed as long as they are on leashes + The beach is mostly sandy + There are bathrooms and showers
        + Parking is easy and the rates are reasonable: $3 per hour or $12 for the day
        Cons: - The bathrooms are not very clean. The toilets are made of stainless, and there are no toilet seats (or fused with the toilets)!
        We will definitely come back!`,
        rating: '4'
      },
      {
        name: 'Andrew Jackson',
        email: 'andrewjackson@gmail.com',
        date: '09/05/2018',
        location: 'Lancaster, CA',
        review: `Got tent set up finally around 8 pm and couldn't wait to get some firewood to relax cook hot dogs and roast marshmallows but apparently that was a really unheard of thing to do along with inconvenient for the camp host to have to get up out of his chair to sell it to me (it was next to him) very rude very disrespectful and hateful behavior never met camp host so sour and hateful with his mad face sneering lip he grumbled about it being too late (8pm) to buy it yet begrudgingly got his f#t a$$ up to get up out of his chair to take my money. That pretty much took the fun out of my evening. I don't like being treated with disrespect when I pay hard earned money for a relaxing pleasant time camping at the beach. What happened Leo Carrillo ?! You need to review your code of conduct toward paying guests with mandated don't be an a whole to campers wanting to buy wood - guess he thinks he's entitled to be rude as he sleeps there so must love acting so superior and
        Condescending. Here's my middle finger hope you get replaced this is Southern California it's where people go to relax and hopefully have a great time - thanks
        For the memory oh greatest most honorable mad faced cranky chair sitting it's my purpose to assist as campers camp host but I really hate when people bother me while I'm sitting next to my firewood for sale pile of wood. He didn't refuse to sell it he just made you wish he was somebody suited for the position he was assigned to be there for WHAT IS UP WITH ENTITLED STATE PARK VOLUNTEERS OR  EMPLOYEES?? And since when do camp hosts act so despicable. Wow someone's not
        Monitoring the help.`,
        rating: '1'
      }
    ],
    amenities: [
      'birding', 'boating', 'campfire', 'fishing', 'hiking', 'kayaking', 'swimming'
    ],
    facilityPhotos: [
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1491157866/campground-photos/ajncbc2bbpgniup0j4tb.jpg',
      'https://i.ytimg.com/vi/eDqdyJ0FA8g/maxresdefault.jpg',
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1491157855/campground-photos/brfrsl9haakmdwtkpc6j.jpg',
      'https://i.pinimg.com/originals/96/a5/bf/96a5bf934790b396bf5c7810149f71eb.jpg',
      'https://beautifulwashington.com/images/pine-ridge-trail/pine-ridge-trail-23.jpg'
    ]
  },
  {
    id: uuid(),
    facilityNum: 'liber3871',
    facilityName: 'Liberty Glen Campground',
    facilityState: 'CA',
    location: {
      type: 'Point',
      coordinates: [-123.055823, 38.7141532]
    },
    hasAmps: false,
    petsAllowed: false,
    hasSewer: false,
    hasWater: true,
    hasFireRing: true,
    hasRestroom: true,
    checkIn: 2,
    checkOut: 12,
    price: 15,
    reviews: [
      {
        name: 'Cary Saltzman',
        email: 'carysaltzman@gmail.com',
        date: '09/03/2018',
        location: 'Los Angeles, CA',
        review: `Great place to relax, take your family and your pup! Beautiful views of the ocean! The beach has many access points so it his hard to find the dog beach. This is located between lifeguard stations 3 and 5. I suggest going through the actual park entrance and paying the $12 fee so beautiful places like this say clean, people have jobs and the park gets updated. It is also easier if your like me and love to set up camp for the day because the parking lot is right on the beach :) If you do not have the money, no worries just park on PCH. Swimming was a bit challenging here the day we went. There is a massive layer of small sized rocks that are being pushed about when the waves come in. If you like a rough sloughing then this is for you! We have not camped there yet but did visit the grounds. After a long summer and tons of tourist, the campground look clean to me. There are little nooks if you want to be more secluded or a middle area if you want to be more social. They have showers, flush toilets, electric and the guard at the entrance was very informative and charming at the same time!`,
        rating: '5'
      },
      {
        name: 'Jennifer Detman',
        email: 'jenniferdetman@gmail.com',
        date: '08/20/2018',
        location: 'Bellingham, WA',
        review: `If I'm not mistaken, this is one of a few beaches in the greater LA area where dogs are allowed. Dogs must be on leashes at all times. We brought our dog, and he had a blast!
        Pros: + Dogs are allowed as long as they are on leashes + The beach is mostly sandy + There are bathrooms and showers
        + Parking is easy and the rates are reasonable: $3 per hour or $12 for the day
        Cons: - The bathrooms are not very clean. The toilets are made of stainless, and there are no toilet seats (or fused with the toilets)!
        We will definitely come back!`,
        rating: '4'
      },
      {
        name: 'Andrew Jackson',
        email: 'andrewjackson@gmail.com',
        date: '09/05/2018',
        location: 'Lancaster, CA',
        review: `Got tent set up finally around 8 pm and couldn't wait to get some firewood to relax cook hot dogs and roast marshmallows but apparently that was a really unheard of thing to do along with inconvenient for the camp host to have to get up out of his chair to sell it to me (it was next to him) very rude very disrespectful and hateful behavior never met camp host so sour and hateful with his mad face sneering lip he grumbled about it being too late (8pm) to buy it yet begrudgingly got his f#t a$$ up to get up out of his chair to take my money. That pretty much took the fun out of my evening. I don't like being treated with disrespect when I pay hard earned money for a relaxing pleasant time camping at the beach. What happened Leo Carrillo ?! You need to review your code of conduct toward paying guests with mandated don't be an a whole to campers wanting to buy wood - guess he thinks he's entitled to be rude as he sleeps there so must love acting so superior and
        Condescending. Here's my middle finger hope you get replaced this is Southern California it's where people go to relax and hopefully have a great time - thanks
        For the memory oh greatest most honorable mad faced cranky chair sitting it's my purpose to assist as campers camp host but I really hate when people bother me while I'm sitting next to my firewood for sale pile of wood. He didn't refuse to sell it he just made you wish he was somebody suited for the position he was assigned to be there for WHAT IS UP WITH ENTITLED STATE PARK VOLUNTEERS OR  EMPLOYEES?? And since when do camp hosts act so despicable. Wow someone's not
        Monitoring the help.`,
        rating: '1'
      }
    ],
    amenities: [
      'birding', 'boating', 'campfire', 'fishing', 'hiking', 'kayaking', 'swimming'
    ],
    facilityPhotos: [
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1513047354/campground-photos/adzn8w0fz3klgp57aglp.jpg',
      'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1513047349/campground-photos/aeu23q1kmokl8f7ctd1g.jpg',
      'https://onelongdrive.net/wp-content/uploads/2016/04/024_PortageValley_vlcsnap-2016-04-24-19h13m07s113.png',
      'https://cdn-assets.alltrails.com/uploads/photo/image/10238480/91c1250b7039a4cdab325c23da05b1a7.jpg',
      'https://imgur.com/6xxdRsd.jpg'
    ]
  }
]
