<script>
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import FeatureCallout from '$lib/components/FeatureCallout.svelte';
	import AppStoreBadge from '$lib/components/AppStoreBadge.svelte';
</script>

<svelte:head>
	<title>One16 - Woodworking Calculator</title>
</svelte:head>

<img
	src="/one16/iPhone-Hero.webp"
	alt="One16 - Fraction Calculator now on the app store"
	class="mx-auto sm:max-w-xl"
/>

<div class="md:px-20 mx-auto max-w-7xl">
	<h1 class="mt-32 mb-7 text-purple-600 text-6xl text-center font-semibold px-5">
		Woodworking is fun. <span class="text-slate-800 block xl:inline">Math isn't.</span>
	</h1>
	<p class="text-center text-slate-400 text-xl leading-9 mb-32 max-w-3xl m-auto px-5">
		Woodworking is fun. Math isn't. Making the most of our precious time in the shop is critical.
		One16 can help. One16 was designed to respect your time, reduce errors, and make mundane math
		operations less painful.

		<AppStoreBadge />
	</p>
</div>

<FeatureCallout
	imageSrc="/one16/screenshots/actions.webp"
	title="Introducing Actions."
	description="	Automate common calculations into fast actions. One of our favorites is calculating board
	feet. We ship One16 with a few to get you started. But creating your own is where the power of
	Actions shines."
	imageAlt="Board Feet Calculator"
/>

<FeatureCallout
	imageSrc="/one16/screenshots/widgets.webp"
	title="Answers at a glance."
	description="The next time saver are widgets. Designed with glanceability at their core. They give you quick
    references to your critical measurements without unlocking your phone or opening the app."
	imageAlt="Widgets"
/>

<FeatureCallout
	imageSrc="/one16/screenshots/rounding.webp"
	title="Ready. Set. Round."
	description="Rounding is a common task. One16 makes it easy to round to the nearest 1/16th, 1/8th, 1/4th, 1/2,
    or whole inch. We also support rounding to the nearest 1/32nd and 1/64th for those who need it."
	imageAlt="Rounding to the nearest 1/16th, 1/8th, 1/4th, 1/2, or whole inch. We also support rounding to the nearest 1/32nd and 1/64th for those who need it."
/>

<FeatureCallout
	title="Equation Builder."
	description="We reference the same value multiple times. But not for related steps. Equation Builder saves you
    time by quickly reusing previous values. Double tap a previous value to copy it to your active term."
/>

<SectionWrapper>
	<h2 class="mt-32 mb-7 text-slate-700 text-5xl text-center font-semibold px-5">
		Private By Default.
	</h2>
	<p class="text-center text-slate-400 text-xl leading-9 mb-32 max-w-3xl m-auto px-5">
		Privacy is at the core of all our products. One16 doesn't track any data about you or your
		usage. If you do find a bug, please reach out to us! We will do our best to get it fixed in a
		timely manner. We love chatting with our users!
	</p>
</SectionWrapper>

<SectionWrapper>
	<h3 class="mt-32 mb-7 text-slate-700 text-3xl text-center font-semibold px-5">...and more</h3>
	<ul
		class="list-none list-inside text-center text-slate-400 text-xl leading-9 mb-32 max-w-3xl m-auto px-5"
	>
		<li>Denominator Keyboard</li>
		<li>Decimal to Fraction conversion</li>
		<li>Simplify fractions</li>
		<li>Add, Subtract, Multiply, Divide fractions and decimals</li>
		<li>Left Handed Keypad</li>
		<li>Privacy Focused</li>
	</ul>
</SectionWrapper>

<SectionWrapper>
	<p class="text-center text-slate-400 text-xl leading-9 max-w-3xl m-auto px-5">
		One16 is built by a weekend woodworker with a family and full-time job. This is who this app is
		designed for. Have a feature suggestion? <a
			href="mailto:hello@codecarton.com"
			class="text-purple-600 hover:text-purple-800 hover:underline hover:underline-offset-4"
			>Let us know!</a
		>
	</p>

	<AppStoreBadge />
</SectionWrapper>
