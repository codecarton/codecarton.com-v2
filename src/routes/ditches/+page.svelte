<script>
	import SectionWrapper from '$lib/components/SectionWrapper.svelte';
	import FeatureCallout from '$lib/components/FeatureCallout.svelte';
	import AppStoreBadge from '$lib/components/AppStoreBadge.svelte';
</script>

<svelte:head>
	<title>Ditches - Bury Bad Habits and Addictions</title>
</svelte:head>

<img
	src="/ditches/ditches-app.webp"
	alt="Ditches - Bury Bad Habits and Addictions now on the app store"
	class="mx-auto sm:max-w-md mt-12"
/>

<div class="md:px-20 mx-auto max-w-7xl">
	<h1 class="mt-7 mb-7 text-black text-6xl text-center font-semibold px-5">
		Bury Bad Habits &amp; Addictions
	</h1>
	<p class="text-center text-gray-400 text-xl leading-9 mb-32 max-w-3xl m-auto px-5">
		Discover your craving patterns, get clarity on what causes them, and build a system to break
		your addictions.

		<!-- <AppStoreBadge /> -->
	</p>
</div>

<FeatureCallout
	imageSrc="/ditches/screenshots/insights.webp"
	title="Gain Insights"
	description="Insights allows you to quickly see when you are most vulnerable to your cravings. This
	information can help you build a system to break your addictions."
	imageAlt="Insights Screenshot"
/>

<FeatureCallout
	imageSrc="/ditches/screenshots/widgets.webp"
	title="Streaks at a Glance"
	description="Streaks can be highly motivating. Widgets allow you to see your current streaks at a glance and quickly get to your addiction."
	imageAlt="Widgets"
/>

<FeatureCallout
	imageSrc="/ditches/screenshots/blueprints.webp"
	title="Reminders"
	description="We all need a little help sometimes. Set reminders to help you stay on track and keep why you are quitting top of mind."
	imageAlt="Reminders Screenshot"
/>

<FeatureCallout
	title="Monochrome Design"
	description="Reduce stimulation and focus on what matters. Monochrome design helps you focus on your goals and not the app."
/>

<FeatureCallout
	title="Streak History"
	description="See how you are doing over time. Streak history allows you to see your progress and where you might need to focus more."
/>

<FeatureCallout
	title="Craving History"
	description="Update your craving history or see when you are most vulnerable. This information can help you build a system to break your addictions."
/>

<SectionWrapper>
	<h2 class="mt-32 mb-7 text-gray-700 text-5xl text-center font-semibold px-5">
		Private By Default.
	</h2>
	<p class="text-center text-gray-400 text-xl leading-9 mb-32 max-w-3xl m-auto px-5">
		Privacy is at the core of all our products. Ditches doesn't track any data about you or your
		usage. If you do find a bug, please reach out to us! We will do our best to get it fixed in a
		timely manner. We love chatting with our users!
	</p>
</SectionWrapper>

<SectionWrapper>
	<h3 class="mt-32 mb-7 text-gray-700 text-3xl text-center font-semibold px-5">...and more</h3>
	<ul
		class="list-none list-inside text-center text-gray-400 text-xl leading-9 mb-32 max-w-3xl m-auto px-5"
	>
		<li>Streak Granularity</li>
		<li>Log Cravings</li>
		<li>Light & Dark Mode</li>
	</ul>
</SectionWrapper>

<SectionWrapper>
	<p class="text-center text-gray-400 text-xl leading-9 max-w-3xl m-auto px-5">
		Ditches is built by a indie developer with a family, full-time job and who has struggled with
		addiction throughout his life. Have a feature suggestion? <a
			href="mailto:hello@codecarton.com"
			class="text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-4"
			>Let us know!</a
		>
	</p>

	<!-- <AppStoreBadge /> -->
</SectionWrapper>
