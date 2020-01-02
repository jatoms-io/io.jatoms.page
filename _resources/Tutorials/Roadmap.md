---
layout: content
author: jatoms-io
description: The planned outline of tutorials that should be created for this site
published_at: 27-12-2019
order: 10
---
## Content
This file describes the planned outline the series of tutorials on this site should follow in order to provide a consistent learning experience for OSGi beginners

## Outline 
The outline may change over time when we get more feedback from other OSGi enthusiasts, as well as users

* First step: be clear about wording, maybe have a separate site for a glossary? Newcomers often complain about the new wording they have to learn for OSGi and that it is not consistent over different tutorial pages

When to use OSGi? 
* When you want to write your own plugin system 
* When you need to update your application within one JVM at runtime without downtime 
* When you need to load/unload code at runtime 
* (Modularity, this doesn't sell good enough, as the problems OSGi solves are often only met later on in large projects)
* Others?

From basic Java to OSGi
 -> Lesson 01
 
Bundles in OSGi
* Back to the "not working" main method: explain what BundleActivators are and how they correlate to the Bundle Lifecycle
* Implement the Hello world in the acitvate method of a bundle activator 
* explain why the bundle activator alone does not help us in order to write proper OSGi applications 
    * create a second bundle with some classes in it
    * try to instantiate classes from one bundle in another bundle
    * this will not work 
* We can explain what private and public packages are 
    * OSGi offers on bundle level what Java offers on class level (public/private)
    * link to module layer and what it has to do with this?
* Now add the respective Bundle annotations for public and private packages to the source code 
* Instantiating classes at runtime will now work

Services in OSGi 
* We now can instantiate directly classes from another bundle, but this might not be the best architecture
* Stop a bundle at runtime (showing dynamism of the bundle lifecycle) and see what happens (both bundles will be deactivated?)
* Introduce services as a mean to cleanly 



OSGi development
* add other needed bnd-maven plugins and explain the final setup, what each plugin does (maybe also maven basics?) and how development works with hot code reload thanks to the bnd-maven-run plugin
* add a bundle activator and explain the concept of it and why in most cases it is not actively used anymore 
* now we have modules but no way to interact, so we introduce services (old school with ServiceTracker)
* Explain the service registry and how it serves as a central hub for service provided by the different bundles
* Introduce DS as an easier mean to provide services that also use DI mechanisms
* Explain the two basic OSGi patterns, Extender/Whiteboard
* show Examples for those patterns, e.g. HttpWhiteboard/EventAdmin or GeckoEMF
* Explain common pitfalls when developing OSGi applications, e.g. resolver errors and how to solve them (in most of the cases)