import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ComboboxControl, Placeholder } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';

export default function Edit( { attributes, setAttributes } ) {
	const { mapId } = attributes;

	const maps = useSelect( ( select ) => {
		return select( coreStore ).getEntityRecords( 'postType', 'map', {
			per_page: -1,
			status: 'publish',
			_fields: 'id,title',
		} );
	}, [] );

	const options = ( maps || [] ).map( ( map ) => ( {
		value: map.id,
		label: map.title?.rendered || `Map #${ map.id }`,
	} ) );

	const selectedLabel = options.find( ( o ) => o.value === mapId )?.label;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Map', 'draad-maps' ) }>
					<ComboboxControl
						label={ __( 'Select map', 'draad-maps' ) }
						value={ mapId || null }
						options={ options }
						onChange={ ( value ) => setAttributes( { mapId: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				{ mapId ? (
					<Placeholder
						icon="location-alt"
						label={ selectedLabel || __( 'Map', 'draad-maps' ) }
						instructions={ __( 'This map will render on the frontend.', 'draad-maps' ) }
					/>
				) : (
					<Placeholder
						icon="location-alt"
						label={ __( 'Map', 'draad-maps' ) }
						instructions={ __( 'Select a map in the sidebar to embed it.', 'draad-maps' ) }
					>
						<ComboboxControl
							label={ __( 'Select map', 'draad-maps' ) }
							value={ mapId || null }
							options={ options }
							onChange={ ( value ) => setAttributes( { mapId: value } ) }
						/>
					</Placeholder>
				) }
			</div>
		</>
	);
}
