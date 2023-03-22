const buttonEl = document.getElementById("add");
const dropEl = document.getElementById("drop");



buttonEl.addEventListener('click', change);

function change() {
    const headline = document.getElementById("headline");
    const author = document.getElementById("author");
    const article = document.getElementById("article");
    if (dropEl.value == "09-01-2022") {
        headline.innerHTML = `<u>Headline:</u> The researchers using AI to analyse peer review.`
        author.innerHTML = `<u>Author:</u> Richard Van Noorden`;
        article.innerHTML = `Do more-highly cited journals have higher-quality peer review? Reviews are generally
                confidential and the
                definition of
                ‘quality’ is elusive, so this is a difficult question to answer. But researchers who used machine
                learning
                to study
                10,000 peer-review reports in biomedical journals have tried. They invented proxy measures for quality,
                which they term
                thoroughness and helpfulness.

                Their work, reported in a preprint article1 in July, found that reviews at journals with higher impact
                factors seem to
                spend more time discussing a paper’s methods but less time on suggesting improvements than do reviews at
                lower-impact
                journals. However, the differences between high- and low-impact journals were modest and variability was
                high. The
                authors say this suggests that a journal’s impact factor is “a bad predictor for the quality of review
                of an
                individual
                manuscript”.


                How to write a thorough peer review

                How did you get these confidential peer-review reports?
                The website Publons (owned by analytics firm Clarivate) has a database of millions of reviews, submitted
                by
                journals or
                by academics themselves. They gave us access because they’re interested in a better understanding of
                peer-review
                quality.`
    }
    else if (dropEl.value == "10-01-2022") {
        headline.innerHTML = `<u>Headline:</u> Why are Pakistan’s floods so extreme this year?`
        author.innerHTML = `<u>Author:</u> Smriti Mallapaty`;
        article.innerHTML = `With rivers breaking their banks, flash flooding and glacial lakes bursting, Pakistan is experiencing its worst floods this century. At least one-third of the country is under water. Scientists say several factors have contributed to the extreme event, which has displaced some 33 million people and killed more than 1,200.

Researchers say the catastrophe probably started with phenomenal heatwaves. In April and May, temperatures reached above 40 °C for prolonged periods in many places. On one sweltering day in May, the city of Jacobabad topped 51 °C. “These were not normal heatwaves — they were the worst in the world. We had the hottest place on Earth in Pakistan,” says Malik Amin Aslam, the country’s former minister for climate change, who is based in Islamabad.

Warmer air can hold more moisture. So meteorologists warned earlier this year that the extreme temperatures would probably result in “above normal” levels of rain during the country’s monsoon season, from July to September, says Zia Hashmi, a water-resources engineer at the Global Change Impact Studies Centre in Islamabad, speaking in his personal capacity.`;
    }
    else if (dropEl.value == "11-01-2022") {
        headline.innerHTML = `<u>Headline:</u> A brainstem map for visceral sensations`
        author.innerHTML = `<u>Author:</u> Chen Ran`;
        article.innerHTML = `The nervous system uses various coding strategies to process sensory inputs. For example, the olfactory system uses large receptor repertoires and is wired to recognize diverse odours, whereas the visual system provides high acuity of object position, form and movement1,2,3,4,5. Compared to external sensory systems, principles that underlie sensory processing by the interoceptive nervous system remain poorly defined. Here we developed a two-photon calcium imaging preparation to 
        understand internal organ representations in the nucleus of the solitary tract (NTS), a sensory gateway in the brainstem that receives vagal and other inputs from the body. Focusing on gut and upper airway stimuli, we observed that individual NTS neurons are tuned to detect signals from particular organs and are topographically organized on the basis of body position. Moreover, some mechanosensory and chemosensory inputs from the same organ 
        converge centrally. Sensory inputs engage specific NTS domains with defined locations, each containing heterogeneous cell types. Spatial representations of different organs are further sharpened in the NTS beyond what is achieved by vagal axon sorting alone, as blockade of brainstem inhibition broadens neural tuning and disorganizes visceral representations. These findings reveal basic organizational features used by the brain to process interoceptive inputs.`;
    }
}