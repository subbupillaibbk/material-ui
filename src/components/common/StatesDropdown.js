import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'components/common/input/Dropdown'
import { useDispatch } from 'react-redux'
import axios, { getEndPointsArgs } from 'axios-instance'
import { getInstanceIdFromURL } from 'components/helper/utility'
import { setLoading } from 'store/ducks/userInteractions'
import { useField, useFormikContext } from 'formik'

const StatesDropdown = (props) => {
  const { selectedCountry, countryChange, ...rest } = props
  const [statesLookup, setStatesLookup] = useState([])
  const dispatch = useDispatch()

  const { setFieldValue } = useFormikContext()
  const [field] = useField(props)

  const instanceId = getInstanceIdFromURL()

  useEffect(async () => {
    dispatch(setLoading(true))

    // Fetch new state options based on country selection
    await axios
      .get(`/${instanceId}/common/getstatesbycountry`, {
        params: { countryId: selectedCountry },
        headers: getEndPointsArgs(),
      })
      .then((response) => {
        // check if the options list has the already selected value,
        // if not reset the state dropdown to ''
        const optionExists = response.data.map((res) => res.id).includes(field.value)
        if (optionExists) {
          setFieldValue(field.name, field.value)
        } else {
          setFieldValue(field.name, '')
        }
        setStatesLookup(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

    dispatch(setLoading(false))
  }, [selectedCountry])

  return statesLookup.length > 0 && <Dropdown {...rest} options={statesLookup} />
}

StatesDropdown.propTypes = {
  selectedCountry: PropTypes.number,
  countryChange: PropTypes.number,
  options: PropTypes.array,
}
export default StatesDropdown
