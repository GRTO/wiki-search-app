import React from 'react'

type Props = {
	params: {
		searchTerm: string;
	}
}

export default function SearchTerm(props: Props) {
	const { params: { searchTerm } } = props;
	return (
		<div>SearchTerm</div>
	)
}
