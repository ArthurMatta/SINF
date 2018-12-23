export default [
  {
    name: '__slot:name',
    title: 'Name',
    titleClass: 'text-center',
    sortField: 'name'
  },
  {
    name: 'email',
    sortField: 'email'
  },
  {
    name: 'age',
    sortField: 'birthdate',
    dataClass: 'text-center'
  },
  {
    name: 'birthdate',
    sortField: 'birthdate',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'formatDate|DD-MM-YYYY',
  },
  {
    name: 'nickname',
    sortField: 'nickname',
    callback: 'allcap'
  },
  {
    name: 'gender',
    sortField: 'gender',
    titleClass: 'text-center',
    dataClass: 'text-center',
    callback: 'genderLabel'
  },
  {
    name: 'salary',
    sortField: 'salary',
    titleClass: 'text-center',
    dataClass: 'text-right',
    callback: 'formatNumber'
  }
]
