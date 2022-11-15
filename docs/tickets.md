---
sidebar_position: 9
---

# Ticketing

## Ticket types

We create ticket types in the following categories, which are used to control "how many" tickets of each type, as well as potentially for branding on the badges themselves.

- **Organizer** - a member of the DevOpsDays Chicago organizing team

- **Speaker** - someone giving a talk/workshop at the event

- **Sponsor** - someone representing a sponsor at the event

- **Vendor** - Someone who is providing a service at the event but requires a ticket. Example would be - photographer, DJ, etc.

- **Early bird** - a limited amount of tickets are sold at a discounted price. These tickets are treated the same as the "Attendee" type for badge purposes, etc.

- **Attendee** - someone attending the event that isn't part of a different ticket type

## Free tickets

We provide codes for free tickets for the following people:

- **Chicago DevOpsDays Organizer** - one code used for all Chicago organizing team members. This code should tie to the "Organizer" ticket type.

- **Volunteer** - one code used for all volunteers. This code should tie to the "Attendee" ticket type.

- **Other DevOpsDays Organizer** - limited to a certain amount (for example, a total of 8 tickets). This code should tie to the "Attendee" ticket type.

- **Core Organizer** - any member of the core DevOpsDays team is provided a free ticket to the event. One code is used for all core members. This code should tie to the "Attendee" ticket type.

- **Speaker** - every speaker receives a free ticket. If possible, there should be a unique code per speaker to help with tracking. Example code might be GEORGE-BLUTH-1562.This code should tie to the "Speaker" ticket type.

- **Speaker guest** - every speaker receives one free guest ticket. There should be a unique key for each speaker's guest, to ensure that only one registers. Example code might be GUEST-BLUTH-6273. This code should tie to the "Attendee" ticket type.

- **Organizer guest** - every member of the Chicago organizing team receives one free guest ticket. There should be a unique key for each organizer's guest, to ensure that only one registers. Example code might be GUEST-STRATTON-6273. This code should tie to the "Attendee" ticket type.

- **Sponsor** - depending on the sponsorship tier, sponsors receive a certain amount of free tickets. Each sponsor must have a unique code and it needs to be limited to the amount of tickets they are entitled to. Example code might be DATADOG-4235. This code should tie to the "Sponsor" ticket type. Note: Free tickets for Community sponsors are not handled with this type - see "Discount Codes" for how Community sponsor tickets are provided.

- **Vendor** - one code used for all vendors for whatever amount of free tickets are needed for their staff. This code should tie to the "Vendor" ticket type.

Note that when generating unique free codes, it is recommended that we follow a process of adding a four-character random string to the end to prevent people "guessing" the code based on a pattern.

## Discount codes

We provide the following types of discount codes. Unless otherwise specified, discount codes provide 20% off a standard ticket price):

- **Sponsor discount** - every sponsor receives a unique discount code for unlimited use which they can provide to additional staff for their booth, other employees who want to attend, or to share with their customers/prospects. This code is tied to the "Attendee" ticket type.

- **CFP submitter discount** - anyone who submits a talk to the CFP that is not chosen receives a 20% discount on admission. This is an unlimited use discount code that is provided to CFP submitters when they receive the "your talk was not chosen" email. This code is tied to the "Attendee" ticket type.

- **Community sponsor free tickets** - community sponsors each receive a unique discount code, limited to 5 uses, for a 100% discount, which they can share with the community/user group, etc. This code is tied to the “Attendee” ticket type.
