1.What is JSX, and why is it used?
=> JSX-এর পূর্ণরূপ হলো JavaScript XML। এটা দেখতে অনেকটা HTML-এর মতো হলেও আসলে এটা জাভাস্ক্রিপ্টের একটা স্পেশাল সিনট্যাক্স।
JSX ছাড়া React-এ কোড লেখা অনেক কঠিন। এটি devloper দের জাভাস্ক্রিপ্ট ফাইলের ভেতরেই HTML-এর মতো কোড লিখতে সাহায্য করে, যা কোডকে আরও Readable এবং Easy to debug করে তোলে।

2.What is the difference between State and Props?
=>Props: এটা হলো External ডেটা। এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে (সাধারণত Parent থেকে Child-এ) ডেটা পাঠানোর জন্য Props ব্যবহার করা হয়। এটা Read-only, অর্থাৎ যে কম্পোনেন্ট Props রিসিভ করে সে এটাকে চেঞ্জ করতে পারে না।

State: এটা হলো কম্পোনেন্টের Internal ডেটা। এটা কম্পোনেন্টের নিজস্ব মেমোরির মতো কাজ করে। State যখনই আপডেট হয়, React অটোমেটিক সেই কম্পোনেন্টকে Re-render করে।

3.What is the useState hook, and how does it work?

=> useState হলো React-এর একটি Hook যা ফাংশনাল কম্পোনেন্টে State ম্যানেজ করতে ব্যবহার করা হয়।

এটা একটা initial value নেয় এবং বিনিময়ে একটি অ্যারে রিটার্ন করে। এই অ্যারের প্রথম element হলো বর্তমান State Value, আর দ্বিতীয়টি হলো সেই ভ্যালু আপডেট করার জন্য একটি Function (setter function)। যখনই আমরা ওই ফাংশন call করে ভ্যালু চেঞ্জ করি, React পুরো UI আপডেট করে দেয়।

4.How can you share state between components in React?
=> Lifting State Up: যখন দুই বা ততোধিক Child কম্পোনেন্টের মধ্যে একই স্টেট দরকার হয়, তখন সেই স্টেটকে তাদের কমন Parent কম্পোনেন্টে নিয়ে যাওয়া হয়। এরপর Props-এর মাধ্যমে ডেটা নিচে পাঠানো হয়।

Context API: প্রজেক্ট বড় হলে বারবার Passing Props না করে সরাসরি গ্লোবালভাবে স্টেট শেয়ার করতে Context API ব্যবহার করা হয়।

5.How is event handling done in React?
=> ইভেন্টের নামগুলো CamelCase-এ লিখতে হয় (যেমন: onclick-এর বদলে onClick)।

ফাংশনটিকে কোটেশনের বদলে Curly Braces-এর { } মধ্যে পাস করতে হয়।

উদাহরণ: <button onClick={handleClick}>Click Me</button>।


