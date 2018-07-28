// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(user) {
    console.log(user.name)
  })
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(function(user) {
    if (user.hometown === town) {
      console.log(user.name)
    }
  })
}

function driversByRevenue(drivers) {
  const newarr = drivers
  return newarr.sort(function(a, b) {
    return a.revenue - b.revenue
  })

}
