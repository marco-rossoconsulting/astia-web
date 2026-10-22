---
title: "WordPress security for hotel websites is now a maintenance question."
route: php-flaw-hotel-wordpress-sites-en
lang: en
excerpt: "A flaw in PHP led to website shutdowns around the world this week. For hotels on WordPress, the real question is who patches the server, and how fast."
tag: Architecture
date: "2026-10-22"
readingTime: "6 min"
published: true
seo:
  title: "PHP flaw: what it means for hotel WordPress sites · Astia"
  description: "A PHP flaw led to website shutdowns worldwide this week. What it means for hotel WordPress sites, what to check now, and when a managed static site is safer."
---

This week, governments in Belgium, the Netherlands, Finland, France and Germany took websites offline while they patched a critical flaw in PHP, the language that runs WordPress. For most hotels, WordPress security for hotel websites has meant plugins and passwords. This PHP vulnerability sits one layer lower, on the server, where most owners never look. A fix is out, so the question for every hotel on WordPress is simple: who installs it, and how fast.

## The PHP vulnerability sits under WordPress, not inside it

On 21 October the PHP project released fixes for two critical flaws, CVE-2026-109618 and CVE-2026-109619, both rated 9.2 out of 10 for severity. They can let an attacker run their own code on a web server without logging in. [The PHP project says](https://www.php.net/archive/2026.php#2026-10-21-5) every installation that serves web requests is at risk, and that updating is the only complete fix. The patched versions are 8.5.12, 8.4.27, 8.3.36 and 8.2.35.

Why does that reach so far? PHP is used by almost 70% of websites, [according to the Guardian](https://www.theguardian.com/technology/2026/oct/21/flaw-in-php-computer-language-leads-to-shutdown-of-websites-around-world), and WordPress is built on it. [WordPress.org was clear that this is not a WordPress bug](https://wordpress.org/news/2026/10/critical-php-security-release/): "No WordPress update is required or planned for these issues." The fix has to happen on the server, which in most cases means your host.

The worry now is speed. The Guardian reports that experts expect attackers to rush to exploit sites before they are patched. [Prof Alan Woodward of the University of Surrey put the risk plainly](https://www.theguardian.com/technology/2026/oct/21/flaw-in-php-computer-language-leads-to-shutdown-of-websites-around-world):

> "The troubling part is there is going to be a long tail of websites who may not be maintained as well and they are going to remain vulnerable, which means we may see weeks and months of ongoing attacks."

That long tail is the part that should concern hotels. Few hotel sites are big targets. Many are poorly maintained ones.

## Is your hotel website affected?

If your site runs on WordPress, it runs on PHP, so the answer depends on your server, not your theme. There are three common cases.

*Managed WordPress hosting.* The host runs PHP for you. WordPress.org notes that hosts may already be updating PHP and adding firewall rules, but says you should still check with yours.

*A server your agency set up years ago.* This is the long tail. If nobody has a clear job to update PHP, nobody probably has. PHP 8.1 and older no longer get fixes from the PHP project, and [the UK's National Cyber Security Centre advises taking systems offline](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php) if the risk can't be reduced.

*A static site.* No PHP is running behind the live site, so this flaw doesn't reach the site itself. If you use a hosted website builder, ask the provider; they run their own servers. More on the limits of that below.

You can see your PHP version in WordPress under Tools > Site Health > Info > Server, or in your hosting panel.

## WordPress security for hotel websites depends on who patches the server

It is not a software problem. It is a responsibility problem. WordPress itself was fine this week. What matters is whether someone was watching the server on Wednesday and acted the same day.

To be fair to WordPress: a well-maintained WordPress site, on a good host that patches quickly, can come through this week fine. The risk sits with sites where hotel website maintenance stopped at launch: the agency moved on, the login sits with a former employee, and the hosting invoice is the only sign the site still exists.

## What to check this week

1. **Ask your agency or host whether PHP is patched.** Ask for the version number in writing. It should be 8.2.35, 8.3.36, 8.4.27 or 8.5.12, or a fixed package from their Linux vendor.
2. **Update WordPress core, themes and plugins.** This won't fix the PHP flaw, as WordPress.org says, but out-of-date plugins are the other usual way in, and this is a good week to close it.
3. **Check for admin users you don't recognise, and ask about backdoors.** [The UK's National Cyber Security Centre advises](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php) anyone who couldn't patch straight away to look for evidence of compromise and for "backdoors installed by an attacker". If you can't do this yourself, ask your host or agency to confirm they have.
4. **Remove plugins you no longer use.** Every plugin is code someone has to keep up to date.

## A static site removes this risk, not every risk

Astia Web sites are built with Astro and served by Netlify. Astro builds every page into plain HTML files ahead of time. Netlify then serves those files. There is no PHP and no database running behind the live site, and no admin login on it, so this class of attack on the site itself goes away. That is the honest difference in the static site vs WordPress debate this week.

Static website security is not the same as no risk. The tools that build the site still need updates. Contact forms on our sites are collected by Netlify's own form service, which Netlify maintains, not by code on your site. And your booking engine and PMS run on your vendors' servers, some of which may run PHP. A static site makes your website smaller as a target. It does not make your hotel immune. So we ask the same question of every vendor connected to your site, and we keep those connections working when they update ([keeping your booking engine and forms connected](/journal/connect-anything-open-platforms-2026-en)).

The word that matters is managed. A static site nobody updates will age too. AI does most of our building and editing, and a person checks every change before it goes live, including security updates. You can read [who updates and checks your site](/how-it-works), and [hosting and security are included in the monthly price](/pricing) of CHF 150 a month.

## Staying on WordPress can be the right choice

If your WordPress site is on a managed host that patched this week, your team edits it every day, and it is connected to tools you rely on, moving is not urgent. Keep it, and make sure maintenance is someone's named job. If your site is simple and rarely changes, a lean one-off build can cost less than a subscription, and we will say so. What matters is that you can [own your code and move it](/journal/you-dont-have-to-rent-your-website-en) if the arrangement stops working.

## Monday's decision is about who answers

On Monday, send one email to whoever runs your website: *Which PHP version is our site on, and when was it last updated?* If the reply comes the same day with a version number, you are in good hands. If it takes a week, or nobody knows who to ask, you have your answer about hotel website maintenance, and it is time to [book a 30-minute call](/book-a-call) about who looks after it next.
