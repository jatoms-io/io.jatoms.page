---
layout: content
author: jatoms-io
title: Roadmap
description: The planned outline of tutorials that should be created for this site
published_at: 27-12-2019

---
# Roadmap

## Content
This file describes the planned outline the series of tutorials on this site should follow in order to provide a consistent learning experience for OSGi beginners

## Outline 
The outline may change over time when we getmore feedback from other OSGi enthusiasts, as well as users

* First step: be clear about wording, maybe have a separate site for a glossary? Newcomers often complain about the new wording they have to learn for OSGi and that it is not consistent over different tutorial pages

From basic Java to OSGi
* Setup a plain hello world java application (No OSGi involved yet)
* add the bnd-maven plugin so that a proper manifest is generated
* explain what OSGi is, the module layer of OSGi and what it has to do with jars and manifests

OSGi development
* add other needed bnd-maven plugins and explain the final setup, what each plugin does (maybe also maven basics?) and how development works with hot code reload thanks to the bnd-maven-run plugin
* add a bundle activator and explain the concept of it and why in most cases it is not actively used anymore 
* now we have modules but no way to interact, so we introduce services (old school with ServiceTracker)
* Explain the service registry and how it serves as a central hub for service provided by the different bundles
* Introduce DS as an easier mean to provide services that also use DI mechanisms
* Explain the two basic OSGi patterns, Extender/Whiteboard
* show Examples for those patterns, e.g. HttpWhiteboard/EventAdmin or GeckoEMF
* Explain common pitfalls when developing OSGi applications, e.g. resolver errors and how to solve them (in most of the cases)