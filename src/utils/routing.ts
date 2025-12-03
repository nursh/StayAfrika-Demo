export const routing = [
  { active: '/', next: 'years', back: '/'},
  { active: '/years', next: '/training', back: '/'},
  { active: '/training', next: '/location', back: '/years'},
  { active: '/location', next: '/location-form', back: '/training'},
  { active: '/location-form', next: '/work', back: '/location'},
  { active: '/work', next: '/moment', back: '/location'},
  { active: '/moment', next: '/map-out-moment', back: '/work'},
  { active: '/map-out-moment', next: '/available-hours', back: '/moment'},
  { active: '/activity-form', next: '/available-hours', back: '/map-out-moment'},
  { active: '/available-hours', next: '/transportation', back: '/map-out-moment'},
  { active: '/transportation', next: '/price', back: '/available-hours'},
  { active: '/price', next: '', back: '/transportation'},
]