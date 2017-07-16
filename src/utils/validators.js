export const pinyinValidator = {
  getMessage (field, args) {
    // will be added to default English messages.
    // Returns a message.
  },
  validate (obj, args) {
    return obj.value === obj.ref[1]
    // Returns a Boolean or a Promise.
  }
}
