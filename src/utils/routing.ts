export const routing = [
  { active: '/', next: 'years', back: '/'},
  { active: '/years', next: '/training', back: '/'},
  { active: '/training', next: '/location', back: '/years'},
  { active: '/location', next: '/work', back: '/training'},
  { active: '/work', next: '/map-out-moment', back: '/location'},
  { active: '/map-out-moment', next: '/activity-form', back: '/work'},
  { active: '/activity-form', next: '/available-hours', back: '/moment'},
  { active: '/available-hours', next: '/transportation', back: '/activity-form'},
  { active: '/transportation', next: '/price', back: '/available-hours'},
  { active: '/price', next: '', back: '/transportation'},
]