import axios from "axios";
import {Config} from "../utils/config";

type UpdateMovieRecommendationProps = {
    variant: string
    id: string
    onPending: (state: boolean) => void
}

export const updateMovieRecommendation = ({variant, id, onPending}: UpdateMovieRecommendationProps) => {
    onPending(true)
    axios.put(`${Config.baseURL}recommendations/${id}/${variant}`).then(res => {
        console.log(res)
    }).catch(err => {
        throw new Error(err)
    }).finally(() => {
        onPending(false)
    })
}