import faker from '@faker-js/faker'

/**
 * This class is for making and removing fake data.
 */
class DataFactory {

    $locale = 'fa'

    $axios = ''

    $route = ''

    $count = 10

    /**
     * Batch registration of data in local storage or end api.
     * @param to This parameter contains the storage driver.
     */
     create () {
        return new Promise(async resolve => {
            await this.loopForCreate()
            return resolve()
        })
    }

    async loopForCreate () {
        faker.locale = this.$locale
        for (let i = 0; i < this.$count; i++) {
            await this.$axios.post(this.$route, this.defination())
        }
    }

    count (value = 10) {
        this.$count = value
        return this
    }

    locale (value) {
        this.$locale = value
        return this
    }

    axios (value) {
        this.$axios = value
        return this
    }

    route (value) {
        this.$route = value
        return this
    }

    fakeGender () {
        const gender = Boolean(faker.datatype.number({min: 0, max: 1}))
        return {gender, maleOrFemale: gender ? 'female' : 'male'}
    }

    fakeEmail () {
        faker.locale = 'en'
        const email = faker.internet.email()
        faker.locale = this.$locale
        return email
    }
}

export default DataFactory