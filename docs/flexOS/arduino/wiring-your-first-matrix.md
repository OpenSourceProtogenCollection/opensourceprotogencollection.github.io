# Wiring Your First Matrix

Hi there! I'm glad you've decided to join me in the interest of building LED protogen fursuits. You should know that this project will require quite a bit of work and money, but it's satisfying when things come together. I'm going to be explaining the code I use as thoroughly as possible. I'll also document building the suit itself.

If you're here before buying anything, great -- it's always good to look around and see if this is right for you first. Let me provide you some links so you can decide if you're ready to invest in this.

First, you'll want to look at what kind of LED board you're using. I use WS2812B flexible boards, which can be had cheaply on AliExpress. The links may expire, but you can always search yourself on the site. I bought from BTFLighting [[1]](https://www.aliexpress.com/item/32390846029.html?spm=a2g0s.9042311.0.0.205a4c4dllk1Sm), [[2]](https://www.aliexpress.com/item/2036819167.html?spm=a2g0s.9042311.0.0.205a4c4dllk1Sm) and [zofipo](https://www.aliexpress.com/item/33025679652.html?spm=a2g0s.9042311.0.0.205a4c4dllk1Sm), and both have worked great for me.

![Listing of a WS2812B board on AliExpress](https://i.postimg.cc/ZRpSMF8Y/Image-001.png)

Next, you'll need some microcontrollers. Though limited in memory, the Arduino Nano is compact and power-efficient. At the time of writing, I'm waiting on delivery from [this store](https://www.aliexpress.com/item/32856118319.html?spm=a2g0s.9042311.0.0.205a4c4dllk1Sm) but my orders from [AOKin](https://www.aliexpress.com/item/33011803738.html?spm=a2g0s.9042311.0.0.205a4c4dllk1Sm) and [GREAT WALL](https://www.aliexpress.com/item/32341832857.html?spm=a2g0s.9042311.0.0.205a4c4dllk1Sm) worked great. If you're getting a Nano, get the 328P variant instead of the 168. _I repeat, do not get the 168_. It does not have enough memory. Some boards have Mirco USB connectors instead of Mini USB, so those may be more convenient for you. If you want more memory you can get an [ESP32](https://www.aliexpress.com/item/32864722159.html?spm=a2g0o.productlist.0.0.24a07fcaY3sSYc&algo_pvid=688571f6-0b3f-4fc9-bc83-80854f2f23c4&algo_expid=688571f6-0b3f-4fc9-bc83-80854f2f23c4-0&btsid=0ab6f82315902659110528161e2942&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_) (I haven't tested these). Buying the pre-soldered boards will save some time -- but hey, while you're here, learn to solder.

![Listing for an Arduino Nano on AliExpress](https://i.postimg.cc/pLp3SJxN/screenshot-1.png)
![Listing for an ESP32 on AliExpress](https://i.postimg.cc/kX5HVv2V/screenshot-2.png)


My fursuit has dynamic emote switching, so it also uses a Raspberry Pi to communicate with those Nanos. I bought this locally. Unfortunately, this one is somewhat pricier from [retailers](https://www.amazon.ca/Raspberry-Model-2019-Quad-Bluetooth/dp/B07TD43PDZ/ref=sr_1_18?keywords=raspberry+pi&qid=1590267024&sr=8-18) no matter where you shop. It's a full-fledged computer.

![Listing for a Raspberry Pi on Amazon](https://i.postimg.cc/0NGnXz6R/screenshot-3.png)

A power source comes next. I considered 18650 Li-ion batteries for a long time but ended up foregoing them due to needing such high amperage that it was just not worth risking an unprotected circuit. My choice of solution was [NiMH AA batteries](https://www.amazon.ca/gp/product/B083FK1HFQ/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1). They are 1.2V apiece, bringing them to 4.8V when 4 are in series in a [battery holder](https://www.amazon.ca/gp/product/B07KF9H8NN/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1). One downside of NiMH batteries is that they take a long-ish time to charge from empty, but the ones I've linked are quite high-capacity and won't run out on you halfway through the day. Just pack a [charger](https://www.amazon.ca/gp/product/B076Q55D12/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1), just in case. DO NOT TRY TO CHARGE NiMH BATTERIES IN OTHER KINDS OF BATTERY CHARGERS :)

You can do emote switching using buttons, but I chose to use [reed switches](https://www.amazon.ca/gp/product/B0156C4PAW/ref=ox_sc_saved_title_6?smid=A34K5WF5Z9R33P&psc=1), which are magnetically triggered. These will be placed in the paw along with a magnet elsewhere in the suit.

You'll also want [a soldering iron](https://www.amazon.ca/gp/product/B07F2WD3P7/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1), [jumper wires and a breadboard](https://www.amazon.ca/panneaux-soudure-serrage-dalimentation-circuit/dp/B07P1GWN3F/ref=sr_1_7?keywords=breadboard&qid=1590266400&sr=8-7), [resistors](https://www.amazon.ca/gp/product/B06XX3VRM6/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1), and [capacitors](https://www.amazon.ca/gp/product/B00W1COWV8/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1).

That's just the electronics. You'll need foam, fur, and any parts you want to add (3D printing comes to mind). I got my foam for my legs and paws at a local fabric store and my fur from [BigZFabric](https://bigzfabric.com/index.php/fabrics/faux-faux-fur-fabric-long-pile.html). I also highly recommend ordering helmet parts from [Kaiborg Studios](http://www.kaiborgstudios.com/diy), basically the only person that does this kind of thing. Trying to thermoform and model and print everything from scratch is gonna suck. You can do it if you want. It's just... gonna suck.

Alright. You're still here, so I assume you're not scared away quite yet. Once you've got your materials, swing by the next page and we'll talk about the wiring.