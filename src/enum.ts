enum Membership {
    Simple,
    Standart,
    Premium
}
const membership = Membership.Standart
const membershipReverse = Membership[2]
console.log(membership) // 1
console.log(membershipReverse) // Premium

enum SosialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const sosial = SosialMedia.INSTAGRAM
console.log(sosial)  // INSTAGRAM